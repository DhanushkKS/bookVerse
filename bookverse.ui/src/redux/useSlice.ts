import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of the user state
type UserState = {
  token: string | null; // JWT token
  userInfo: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  } | null; // User details
  isAuthenticated: boolean; // Authentication status
};

// Initial state
const initialState: UserState = {
  token: localStorage.getItem("token"), // Load token from localStorage if available
  userInfo: null,
  isAuthenticated: !!localStorage.getItem("token"), // If token exists, assume authenticated
};

// User slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action to set user data and mark as authenticated
    setUser(
      state,
      action: PayloadAction<{ token: string; userInfo: UserState["userInfo"] }>,
    ) {
      state.token = action.payload.token;
      state.userInfo = action.payload.userInfo;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload.token); // Store token in localStorage
    },

    // Action to log out the user
    logout(state) {
      state.token = null;
      state.userInfo = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token"); // Clear token from localStorage
    },
  },
});

// Export actions and reducer
export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
