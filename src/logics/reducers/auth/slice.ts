import { createSlice } from '@reduxjs/toolkit';

import { AuthState } from '../../store/schema';
import { signIn, signInPending, signInFulfilled, signInRejected } from './actions/signIn';

const initialState: AuthState = {
  actor: null,
  signingIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, signInPending);
    builder.addCase(signIn.fulfilled, signInFulfilled);
    builder.addCase(signIn.rejected, signInRejected);
  },
});

// export const { signedIn } = authSlice.actions;

export default authSlice.reducer;
