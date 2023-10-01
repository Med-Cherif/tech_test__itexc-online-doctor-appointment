import { createSlice } from "@reduxjs/toolkit";
import tokenStorageKey from "../../constants/tokenStorageKey";

const slice = createSlice({
  name: "user",
  initialState: {
    accessToken: null,
    userData: {},
  },
  reducers: {
    authSuccess: (state, { payload }) => {
      const { accessToken, userData } = payload;
      localStorage.setItem(tokenStorageKey, accessToken);
      state.accessToken = accessToken;
      state.userData = userData;
    },
    logout: (state) => {
      localStorage.removeItem(tokenStorageKey);
      state.accessToken = null;
      state.userData = {};
    },
  },
});

const userReducer = slice.reducer;
const userActions = slice.actions;

export default userReducer;

export { userActions };
