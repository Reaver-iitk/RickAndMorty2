import { createAsyncThunk } from '@reduxjs/toolkit';
import { CharacterInfoType } from '../character/character.type';
import { SliceNames } from '../sliceName';
import { ThunkAsyncConfig } from '../types';

export const fetchCharacterByIdAction = createAsyncThunk<
  CharacterInfoType,
  number,
  ThunkAsyncConfig
>(
  `${SliceNames.CHARACTER}/fetchCharacterAction`,
  async (
    id,
    {
      extra: {
        characterServices: { fetchCharacterService },
      },
    },
  ) => {
    try {
      const characters = await fetchCharacterService(id);
      return { ...characters };
    } catch (error) {
      return Promise.reject(error);
    }
  },
);
