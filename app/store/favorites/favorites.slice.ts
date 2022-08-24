import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceNames } from '../sliceName';
import { fetchFavoriteAction } from './favorite.action';
import { FavoriteState } from './favorites.type';

let initialState: FavoriteState = {
  characterNames: [],
};
const slice = createSlice({
  initialState,
  name: SliceNames.FAVORITES,
  reducers: {
    addFavoriteAction(state, action: PayloadAction<{ characterName: string }>) {
      const { characterName } = action.payload;
      if (!state.characterNames.includes(characterName))
        state.characterNames.push(characterName);
    },
    removeFavoriteAction(
      state,
      action: PayloadAction<{ characterName: string }>,
    ) {
      const { characterName } = action.payload;
      const newFavorite = state.characterNames.filter((characterNames) => {
        return characterNames !== characterName;
      });

      state.characterNames = newFavorite;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchFavoriteAction.fulfilled,
      (state, { payload: favoritesCharacters }) => {
        state.characterNames = favoritesCharacters;
      },
    );
  },
});

export const {
  reducer: favoriteReducer,
  actions: { addFavoriteAction, removeFavoriteAction },
} = slice;
