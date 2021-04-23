import { createSelector } from '@reduxjs/toolkit';

import { AuthState } from '../../store/schema';
import { selectAuth } from './root';

export const selectUser = createSelector(selectAuth, ({ actor }: AuthState) => actor);
