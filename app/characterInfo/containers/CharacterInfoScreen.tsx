import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import {
  useCharacter,
  useLoadingCharacter,
} from '../../store/character/character.selector';
import CharacterInfoItem from '../components/CharacterInfoItem';

const CharacterInfoScreen = () => {
  const character = useCharacter();

  const characterLoading = useLoadingCharacter();

  console.log(character);

  return characterLoading ? (
    <ActivityIndicator style={styles.loading} size="large" />
  ) : (
    <CharacterInfoItem character={character}></CharacterInfoItem>
  );
};

const styles = StyleSheet.create({
  loading: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CharacterInfoScreen;
