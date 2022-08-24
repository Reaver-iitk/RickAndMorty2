export type CharactersResponse = {
  info: CharactersInfoPages;
  results: CharacterType[];
};

type CharactersInfoPages = {
  next: string;
  page: string;
};

export type CharacterType = {
  id: number;
  name: string;
  status: string;
  image: string;
};

export type CharactersState = {
  loading: boolean;
  characters: CharacterType[];
  next: boolean;
  page: number;
};
