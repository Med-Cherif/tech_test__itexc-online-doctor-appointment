import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./useRedux";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import authApis from "../apis/authApis";
// import { TLoginData, TRegisterData } from "../types/auth";
// import { userActions } from "../store/slices/userSlice";
import { UseFormProps } from "react-hook-form";
import { userActions } from "../store/slices/userSlice";

export const useAuth = (
  dataKey: "register" | "login",
  useFormProps: UseFormProps = {}
) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const form = useForm(useFormProps);

  // const [error, setError] = useState(null);

  const mutation = useMutation({
    mutationFn: (data: unknown) => {
      return authApis[dataKey](data).then((res) => res.data.data);
    },
    onSuccess(data) {
      dispatch(userActions.authSuccess(data));
      navigate("/dashboard");
    },
    onError() {
      alert(
        "Something went wrong, It Could be a server error or you made mistake in fields, Open Network Devtoolf for more details"
      );
      // handleMultipleErrors({
      //   error,
      //   setError,
      //   setFormError: form.setError,
      // });
    },
  });

  const onSubmitSuccess = (data: unknown) => {
    // console.log(data);
    mutation.mutate(data);
  };

  return {
    form,
    mutation,
    onSubmitSuccess,
  };
};

export const useGetUserAuth = () => {
  const { accessToken, userData } = useAppSelector((state) => state.user);
  //   const [userData, setUserData] = useState(use)
  const dispatch = useAppDispatch();
  const { data, isLoading } = useQuery({
    queryKey: ["auth-user", accessToken],
    queryFn: () => {
      return authApis.getProfileData();
    },
    enabled: !!accessToken && !userData,
  });

  useEffect(() => {
    if (data) {
      dispatch(userActions.getProfileData(data.data.data));
      //   console.log(data.data.data);
    }
  }, [data]);

  return {
    isLoading,
  };
};
