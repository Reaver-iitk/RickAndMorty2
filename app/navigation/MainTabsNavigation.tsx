import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RootStackParamsList } from './types';
import { CharactersScreen } from '../characters/containers/CharactersScreen';
import { FavoritesScreen } from '../favorites/containers/FavoritesScreen';

const Tab = createMaterialTopTabNavigator<RootStackParamsList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="CharactersTab"
        component={CharactersScreen}
        options={{ title: 'Персонажи' }}
      />
      <Tab.Screen
        name="FavoritesTabs"
        component={FavoritesScreen}
        options={{ title: 'Избранное' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
