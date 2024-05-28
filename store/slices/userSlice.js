import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  password: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { email, password } = action.payload;

      state.email = email;
      state.password = password;
    },
    clearUser: (state) => {
      state.email = null;
      state.password = null;
    },
  },
});

export const { setUser, clearUser, updateLocation, updateState } =
  userSlice.actions;

export default userSlice.reducer;
