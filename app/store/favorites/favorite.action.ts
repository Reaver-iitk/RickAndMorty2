import { createAsyncThunk } from '@reduxjs/toolkit';
import { SliceNames } from '../sliceName';

export const fetchFavoriteAction = createAsyncThunk(
  `${SliceNames.FAVORITES}/fetchFavoriteAction`,
  (favoriteNames: string[]) => {
    return favoriteNames;
  },
);
