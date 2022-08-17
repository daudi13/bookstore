import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logUserin: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.loggedIn = true;
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload;
    },
    logUserOut: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.loggedIn = false;
      // eslint-disable-next-line no-param-reassign
      state.user = null;
    },
  },
});

export const { logUserin, logUserOut } = userSlice.actions;

export default userSlice.reducer;
