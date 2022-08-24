import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {} from '../characters/characters.type';
import { SliceNames } from '../sliceName';
import { fetchCharacterByIdAction } from './character.action';
import { CharacterInfoType, CharacterState } from './character.type';

let initialState: CharacterState = {
  character: {
    name: '',
    status: '',
    gender: '',
    image: '',
    origin: {
      name: '',
    },
    location: {
      name: '',
    },
  },
  loading: true,
};
const slice = createSlice({
  initialState,
  name: SliceNames.CHARACTER,
  reducers: {
    fetchCharacterAction: (
      state: CharacterState,
      { payload }: PayloadAction<Partial<CharacterInfoType>>,
    ) => {
      state.character = {
        ...(payload as CharacterInfoType),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacterByIdAction.fulfilled, (state, { payload }) => {
        state.character = {
          ...(payload as CharacterInfoType),
        };
        state.loading = false;
      })
      .addCase(
        fetchCharacterByIdAction.rejected,
        (state, { error: { message } }) => {
          state.loading = false;
          console.log(message);
        },
      )
      .addCase(fetchCharacterByIdAction.pending, (state) => {
        state.loading = true;
      });
  },
});

export const {
  reducer: characterReducer,
  actions: { fetchCharacterAction },
} = slice;
