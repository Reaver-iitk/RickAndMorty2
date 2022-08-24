export type CharacterInfoType = {
  name: string;
  status: string;
  gender: string;
  image: string;
  origin: OriginType;
  location: LocationType;
};

export type CharacterResponse = CharacterInfoType;

export type CharacterState = {
  character: CharacterInfoType;
  loading: boolean;
};

type OriginType = {
  name: string;
};

type LocationType = {
  name: string;
};
