import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen'
import PopularScreen from '../screen/PopularScreen'


const Stack = createStackNavigator();

function MainStackNavigator(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Popular" component={ PopularScreen } />
        <Stack.Screen name="Home" component={ HomeScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator