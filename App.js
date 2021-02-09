import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStackNavigator from './navigation'


export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <MainStackNavigator></MainStackNavigator>
      </Provider>
    </SafeAreaProvider>
  );
}
