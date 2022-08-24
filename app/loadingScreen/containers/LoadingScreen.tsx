import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RootStackParamsList } from '../../navigation/types';
import { useLoading } from '../../store/characters/characters.selector';

const LoadingScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamsList>>();

  const loading = useLoading();

  if (!loading) {
    //Для наглядности
    setTimeout(() => {
      navigation.reset({ routes: [{ name: 'MainTabsScreen' }] });
    }, 2000);
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Загрузка...</Text>
    </View>
  );
};

export { LoadingScreen };

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});
