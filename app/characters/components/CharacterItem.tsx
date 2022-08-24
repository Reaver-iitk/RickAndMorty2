import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import FavoriteIcon from '../../res/favoriteIcon';
import { fetchCharacterByPageAction } from '../../store/characters/characters.action';
import { usePage } from '../../store/characters/characters.selector';
import { CharacterType } from '../../store/characters/characters.type';
import { useDispatch } from '../../store/hooks/useAppDispatch';
import Toast from 'react-native-simple-toast';
import { addFavoriteAction } from '../../store/favorites/favorites.slice';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../navigation/types';
import { fetchCharacterByIdAction } from '../../store/character/character.action';

type OwnProps = {
  item: CharacterType;
  getMoreCharacters: boolean;
};

const CharacterItem = ({ item, getMoreCharacters }: OwnProps) => {
  const currentPage = usePage();
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();

  const showMoreCharacters = () => {
    dispatch(fetchCharacterByPageAction(currentPage + 1));
  };

  const navigateToCharacter = () => {
    dispatch(fetchCharacterByIdAction(item.id));
    navigation.navigate('CharacterInfoScreen');
  };
  const addFavorite = (name: string) => {
    Toast.show(`Персонаж ${name} добавлен в избранное`);
    dispatch(addFavoriteAction({ characterName: name }));
  };

  return !getMoreCharacters ? (
    <Pressable onPress={navigateToCharacter}>
      <View style={styles.listItem}>
        <FastImage style={styles.image} source={{ uri: item.image }} />
        <View style={styles.body}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.alive}>{item.status}</Text>
        </View>
        <Pressable
          style={styles.favoriteButton}
          onPress={() => addFavorite(item.name)}
        >
          <FavoriteIcon />
        </Pressable>
      </View>
    </Pressable>
  ) : (
    <Text style={styles.showMoreText} onPress={showMoreCharacters}>
      Показать больше персонажей
    </Text>
  );
};

export { CharacterItem };

const styles = StyleSheet.create({
  body: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 40,
  },
  favoriteButton: {
    marginTop: 6,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  alive: {
    fontSize: 14,
    opacity: 0.5,
  },
  showMoreText: {
    alignSelf: 'center',
    color: '#7099E0',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  listItem: {
    flexDirection: 'row',
    margin: 10,
  },
});
