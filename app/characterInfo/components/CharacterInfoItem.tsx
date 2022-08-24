import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import Toast from 'react-native-simple-toast';
import FavoriteIcon from '../../res/favoriteIcon';
import { CharacterInfoType } from '../../store/character/character.type';
import { addFavoriteAction } from '../../store/favorites/favorites.slice';
import { useDispatch } from '../../store/hooks/useAppDispatch';

type OwnProps = {
  character: CharacterInfoType;
};

const CharacterInfoItem = ({ character }: OwnProps) => {
  const dispatch = useDispatch();

  const addFavorite = (name: string) => {
    Toast.show(`Персонаж ${name} добавлен в избранное`);
    dispatch(addFavoriteAction({ characterName: name }));
  };

  return (
    <View style={styles.body}>
      <FastImage style={styles.image} source={{ uri: character.image }} />
      <Text style={styles.text}>Имя: {character.name}</Text>
      <Text style={styles.text}>Статус: {character.status}</Text>
      <Text style={styles.text}>Пол: {character.gender}</Text>
      <Text style={styles.text}>Место рождения: {character.origin.name}</Text>
      <Text style={styles.text}>
        Место проживания: {character.location.name}
      </Text>
      <Pressable onPress={() => addFavorite(character.name)}>
        <FavoriteIcon size={120} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    height: 140,
    width: 140,
    borderRadius: 40,
  },
  text: {
    fontSize: 14,
    opacity: 0.5,
  },
});

export default CharacterInfoItem;
