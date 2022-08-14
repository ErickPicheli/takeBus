import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { List } from '../screens/List';
import { Embarque } from '../screens/Embarque';
import { Desembarque } from '../screens/Desembarque';

const MainStack = createStackNavigator();

export const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen 
      name="Rotas" 
      component={List} 
      options={{ headerTitle: 'Rotas perto de você!', headerBackVisible:false}}
    />
    <MainStack.Screen
      name="Embarque"
      component={Embarque}
      options={{ headerTitle: 'Embarque' }}
    />
    <MainStack.Screen
      name="Desembarque"
      component={Desembarque}
      options={{ headerTitle: 'Desembarque', headerBackVisible:false}}
    />
  </MainStack.Navigator>
);
