import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { RootStackParamsList } from '../../navigation/types';
import { useLoading } from '../../store/characters/characters.selector';
import { Loader } from '../components/Loader';

const LoadingScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamsList>>();

  const loading = useLoading();

  if (!loading) {
    //Для наглядности
    setTimeout(() => {
      navigation.reset({ routes: [{ name: 'MainTabsScreen' }] });
    }, 2000);
  }
  return <Loader />;
};

export { LoadingScreen };
