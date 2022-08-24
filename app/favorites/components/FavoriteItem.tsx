import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import FavoriteIcon from '../../res/favoriteIcon';
import { removeFavoriteAction } from '../../store/favorites/favorites.slice';
import { useDispatch } from '../../store/hooks/useAppDispatch';
import Toast from 'react-native-simple-toast';

type OwnProps = {
  characterName: string;
};

const FavoriteItem = ({ characterName }: OwnProps) => {
  const dispatch = useDispatch();

  const removeFavorite = () => {
    Toast.show(`${characterName} удален из избранного`);
    dispatch(removeFavoriteAction({ characterName }));
  };
  return (
    <View style={styles.listItem}>
      <Text style={styles.name}>{characterName}</Text>
      <Pressable onPress={() => removeFavorite()}>
        <FavoriteIcon />
      </Pressable>
    </View>
  );
};

export { FavoriteItem };

const styles = StyleSheet.create({
  body: {
    marginLeft: 10,
    marginRight: 10,
  },
  name: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    margin: 10,
  },
});
