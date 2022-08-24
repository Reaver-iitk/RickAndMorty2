import { useAppSelector } from '../hooks/useAppSelector';

export const useCharacters = () =>
  useAppSelector(({ characters: { characters } }) => characters);

export const useLoading = () =>
  useAppSelector(({ characters: { loading } }) => loading);

export const useNextPage = () =>
  useAppSelector(({ characters: { next } }) => next);

export const usePage = () => useAppSelector(({ characters: { page } }) => page);
