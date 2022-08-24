import { useAppSelector } from '../hooks/useAppSelector';

export const useCharacter = () =>
  useAppSelector(({ character: { character } }) => character);

export const useLoadingCharacter = () =>
  useAppSelector(({ character: { loading } }) => loading);
