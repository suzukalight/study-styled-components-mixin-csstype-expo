import { createSelector } from '@reduxjs/toolkit';

import { selectRootState } from '../root';

export const selectAuth = createSelector(selectRootState, ({ auth }) => auth);
