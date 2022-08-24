import { useAppSelector } from '../hooks/useAppSelector';

export const useFavorites = () =>
  useAppSelector(({ favorites: { characterNames } }) => characterNames);
