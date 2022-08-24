export type RootStackParamsList = {
  MainTabsScreen: undefined;
  LoadingScreen: undefined;
} & TopTabsParamsList &
  CharacterInfoParamsList;

type TopTabsParamsList = {
  CharactersTab: undefined;
  FavoritesTabs: undefined;
};

type CharacterInfoParamsList = {
  CharacterInfoScreen: undefined;
};
