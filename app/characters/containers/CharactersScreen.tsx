import React from 'react';
import { ListRenderItemInfo, FlatList } from 'react-native';
import {
  useCharacters,
  useNextPage,
} from '../../store/characters/characters.selector';
import { CharacterType } from '../../store/characters/characters.type';
import { CharacterItem } from '../components/CharacterItem';

let characters: CharacterType[] = [];

const CharactersScreen = () => {
  const charactersList = useCharacters();
  const nextPage = useNextPage();

  for (let i = 0; i < Object.keys(charactersList).length; i++) {
    characters.push(charactersList[i]);
  }

  const renderItem = ({ item, index }: ListRenderItemInfo<CharacterType>) => {
    const getMoreCharacters = index === characters.length - 1 && nextPage;
    return <CharacterItem item={item} getMoreCharacters={getMoreCharacters} />;
  };
  return (
    <FlatList
      data={characters}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export { CharactersScreen };
