import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/home';
import MyTabs from './tabNavigator';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="messages" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
