import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import CharacterInfoScreen from '../characterInfo/containers/CharacterInfoScreen';
import { LoadingScreen } from '../loadingScreen/containers/LoadingScreen';
import { fetchCharacterByPageAction } from '../store/characters/characters.action';
import { useDispatch } from '../store/hooks/useAppDispatch';
import MainTabsNavigation from './MainTabsNavigation';
import { RootStackParamsList } from './types';

const RootStack = createStackNavigator<RootStackParamsList>();

const RootNavigation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacterByPageAction(1));
  }, []);

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="MainTabsScreen"
          component={MainTabsNavigation}
          options={{ title: 'Рик и Морти V2' }}
        />
        <RootStack.Screen
          name="CharacterInfoScreen"
          component={CharacterInfoScreen}
          options={{ title: 'Информация о персонаже' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
