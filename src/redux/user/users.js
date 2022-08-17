import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loggedIn: false,
  user: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logUserin: (state, action) => {
      state.loggedIn = true;
      state.user = action.payload;
    },
    logUserOut: (state) => {
      state.loggedIn = false
      state.user = null;
    },
  },
});

export const { logUserin, logUserOut } = userSlice.actions

export default userSlice.reducer;