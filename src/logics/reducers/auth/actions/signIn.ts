import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthState, User } from '../../../store/schema';
import { FulfilledAction, PendingAction, RejectedWithValueAction } from '../../types';
import { sleep } from '../../../../utils/sleep';

export type SignInInputData = {
  email: string;
  password: string;
};

export const signIn = createAsyncThunk<User, SignInInputData>(
  'auth/signIn',
  async ({ email, password }, thunkApi) => {
    // FIXME API呼び出しに変える
    await sleep(1000);

    if (email.indexOf('@email.com') < 0) {
      return thunkApi.rejectWithValue({ errorMessage: 'Fetch error' });
    }
    return { id: '42' };
  },
);

export const signInPending = (state: AuthState, action: PendingAction<SignInInputData>) => {
  state.signingIn = true;
};

export const signInFulfilled = (
  state: AuthState,
  action: FulfilledAction<SignInInputData, User>,
) => {
  state.signingIn = false;
  state.actor = { id: '32' };
};

export const signInRejected = (
  state: AuthState,
  action: RejectedWithValueAction<SignInInputData, { message: string }>,
) => {
  state.signingIn = false;
  state.actor = null;
};
