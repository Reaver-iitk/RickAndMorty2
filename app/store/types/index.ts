import { AnyAction, Dispatch, ThunkDispatch } from '@reduxjs/toolkit';
import { ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { characterServices, charactersServices } from '../../services';
import { CharacterState } from '../character/character.type';
import { CharactersState } from '../characters/characters.type';
import { FavoriteState } from '../favorites/favorites.type';

export type RootState = {
  characters: CharactersState;
  character: CharacterState;
  favorites: FavoriteState;
};

export type Dependencies = {
  charactersServices: typeof charactersServices;
  characterServices: typeof characterServices;
};

export type ThunkMiddlewareOptions = {
  thunk: {
    extraArgument: Dependencies;
  };
};

type AppDispatch = Dispatch & ThunkDispatch<RootState, Dependencies, AnyAction>;
export type ThunkAsyncConfig = {
  extra: Dependencies;
  state: RootState;
  dispatch: AppDispatch;
};
