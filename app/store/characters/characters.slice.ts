import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceNames } from '../sliceName';
import { fetchCharacterByPageAction } from './characters.action';
import { CharacterType, CharactersState } from './characters.type';

let initialState: CharactersState = {
  characters: [],
  loading: true,
  next: false,
  page: 0,
};
const slice = createSlice({
  initialState,
  name: SliceNames.CHARACTERS,
  reducers: {
    fetchCharactersAction: (
      state: CharactersState,
      { payload }: PayloadAction<Partial<CharacterType>>,
    ) => {
      state.characters = {
        ...state.characters,
        ...(payload as CharacterType),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCharacterByPageAction.fulfilled,
        (state, { payload: { info, results } }) => {
          if (info && info.next) {
            state.next = true;
          } else {
            state.next = false;
          }
          state.page = state.page + 1;

          state.characters = {
            ...state.characters,
            ...results,
          };

          state.loading = false;
        },
      )
      .addCase(
        fetchCharacterByPageAction.rejected,
        (state, { error: { message } }) => {
          console.log(message);
          state.loading = false;
        },
      )
      .addCase(fetchCharacterByPageAction.pending, (state) => {
        state.loading = true;
      });
  },
});

export const {
  reducer: charactersReducer,
  actions: { fetchCharactersAction },
} = slice;
