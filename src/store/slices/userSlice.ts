import { createSlice } from "@reduxjs/toolkit";
import tokenStorageKey from "../../constants/tokenStorageKey";
import { TUser } from "../../types/user";

interface TUserState {
  accessToken: string | null;
  userData: TUser | null;
}

const slice = createSlice({
  name: "user",
  initialState: {
    accessToken: localStorage.getItem(tokenStorageKey) || null,
    userData: null,
  } as TUserState,
  reducers: {
    authSuccess: (state, { payload }) => {
      const { token, user } = payload;
      localStorage.setItem(tokenStorageKey, token);
      state.accessToken = token;
      state.userData = user;
    },
    getProfileData: (state, action) => {
      state.userData = {
        ...state.userData,
        ...action.payload,
      };
    },
    logout: (state) => {
      localStorage.removeItem(tokenStorageKey);
      state.accessToken = null;
      state.userData = null;
    },
  },
});

const userReducer = slice.reducer;
const userActions = slice.actions;

export default userReducer;

export { userActions };
