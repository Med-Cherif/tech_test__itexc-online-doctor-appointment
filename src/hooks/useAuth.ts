/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./useRedux";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import authApis from "../apis/authApis";
// import { TLoginData, TRegisterData } from "../types/auth";
// import { userActions } from "../store/slices/userSlice";
import { UseFormProps } from "react-hook-form";
import { userActions } from "../store/slices/userSlice";
import { TUser } from "../types/user";
import { handleMultipleErrors } from "../helpers/errorHelpers";

export const useAuth = (
  dataKey: "register" | "login",
  useFormProps: UseFormProps = {}
) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const form = useForm(useFormProps);

  const [error, setError] = useState(null);

  const mutation = useMutation({
    mutationFn: (data: unknown) => {
      return authApis[dataKey](data).then((res) => res.data.data);
    },
    onMutate() {
      setError(null);
    },
    onSuccess(data) {
      dispatch(userActions.authSuccess(data));
      navigate("/dashboard");
    },
    onError(error: any) {
      // console.log(error.);
      handleMultipleErrors({
        error,
        setError,
        setFormError: form.setError,
      });
    },
  });

  const onSubmitSuccess = (data: unknown) => {
    // console.log(data);
    mutation.mutate(data);
  };

  return {
    form,
    mutation,
    error,
    onSubmitSuccess,
  };
};

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(userActions.logout());
    navigate("/login");
  };

  return {
    onLogout,
  };
};

export const useGetUserAuth = () => {
  const { accessToken, userData } = useAppSelector((state) => state.user);
  //   const [userData, setUserData] = useState(use)
  // const dispatch = useAppDispatch();
  const { data, isLoading } = useQuery({
    queryKey: ["auth-user", accessToken],
    queryFn: () => {
      return authApis.getProfileData();
    },
    enabled: !!accessToken && !userData,
    cacheTime: 0,
    staleTime: 0,
  });

  // useEffect(() => {
  //   if (data) {
  //     dispatch(userActions.getProfileData(data.data.data));
  //     //   console.log(data.data.data);
  //   }
  // }, [data]);

  return {
    isLoading,
    data: data?.data?.data || null,
  };
};

export const useUpdateProfileData = (onSuccess?: (data: TUser) => void) => {
  const dispatch = useAppDispatch();

  const { mutate, isLoading } = useMutation({
    mutationFn: (vars: unknown) => {
      return authApis.setProfileData(vars);
    },
    onSuccess(data) {
      const response = data.data.data;
      if (onSuccess) {
        onSuccess(response);
      }
      dispatch(userActions.getProfileData(response));
    },
  });

  return {
    mutate,
    isLoading,
  };
};
