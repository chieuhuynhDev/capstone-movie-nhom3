import { createSlice } from "@reduxjs/toolkit";

let userLoad = localStorage.getItem("USER_LOGIN")
  ? JSON.parse(localStorage.getItem("USER_LOGIN"))
  : null;

const initialState = {
  dataLogin: userLoad,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserAction: (state, action) => {
      state.dataLogin = action.payload;
    },
  },
});

export const { setUserAction } = userSlice.actions;

export default userSlice.reducer;
