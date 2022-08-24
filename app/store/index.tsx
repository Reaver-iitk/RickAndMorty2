import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AnyAction,
  combineReducers,
  configureStore,
  Reducer,
} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { characterServices, charactersServices } from '../services';
import { characterReducer } from './character/character.slice';
import { charactersReducer } from './characters/characters.slice';
import { favoriteReducer } from './favorites/favorites.slice';
import { Dependencies, RootState } from './types';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blackList: [],
  whitelist: ['favorites'],
};

type MainState = Omit<RootState, '_persist'>;

type Reducers = { [K in keyof MainState]: Reducer<MainState[K], AnyAction> };

const reducers: Reducers = {
  characters: charactersReducer,
  character: characterReducer,
  favorites: favoriteReducer,
};

const dependencies: Dependencies = {
  charactersServices,
  characterServices,
};

const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: dependencies,
      },
    }),
});

export const persistor = persistStore(store);
