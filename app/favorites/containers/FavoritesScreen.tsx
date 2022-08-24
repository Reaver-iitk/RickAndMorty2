import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { useFavorites } from '../../store/favorites/favories.selector';
import { FavoriteItem } from '../components/FavoriteItem';

const FavoritesScreen = () => {
  const favoriteCharacters = useFavorites();

  const renderItem = ({ item }) => <FavoriteItem characterName={item} />;

  return (
    <FlatList
      data={favoriteCharacters}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      ItemSeparatorComponent={() => <View style={styles.separatorStyle} />}
    />
  );
};

export { FavoritesScreen };

const styles = StyleSheet.create({
  separatorStyle: {
    width: '100%',
    height: 1,
    backgroundColor: '#C0C0C0',
  },
});
