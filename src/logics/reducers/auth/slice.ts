import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthState, User } from '../../store/schema';

const initialState: AuthState = {
  actor: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signedIn: (state, action: PayloadAction<User | null>) => {
      state.actor = action.payload;
    },
  },
});

export const { signedIn } = authSlice.actions;

export default authSlice.reducer;
