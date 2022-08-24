import { createAsyncThunk } from '@reduxjs/toolkit';
import { SliceNames } from '../sliceName';
import { ThunkAsyncConfig } from '../types';
import { CharactersResponse } from './characters.type';

export const fetchCharacterByPageAction = createAsyncThunk<
  CharactersResponse,
  number,
  ThunkAsyncConfig
>(
  `${SliceNames.CHARACTERS}/fetchCharactersAction`,
  async (
    page,
    {
      extra: {
        charactersServices: { fetchCharactersService },
      },
    },
  ) => {
    try {
      const characters = await fetchCharactersService(page);
      return { ...characters };
    } catch (error) {
      return Promise.reject(error);
    }
  },
);
