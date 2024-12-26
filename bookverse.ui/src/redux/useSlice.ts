import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  token: string | null;
  userInfo: {
    id: string;
    email: string;
  } | null;
  isAuthenticated: boolean;
};

const initialState: UserState = {
  token: localStorage.getItem("user"),
  userInfo: null,
  isAuthenticated: !!localStorage.getItem("user"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(
      state,
      action: PayloadAction<{ token: string; userInfo: UserState["userInfo"] }>,
    ) {
      state.token = action.payload.token;
      state.userInfo = action.payload.userInfo;
      const user = { token: state.token, userInfo: state.userInfo };
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(user)); // Store token in localStorage
    },

    logout(state) {
      state.token = null;
      state.userInfo = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
