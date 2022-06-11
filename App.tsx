import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import { Provider } from 'react-redux'
import Home from './src/screens/Home/Home'
import Crypto from './src/screens/Crypto/Crypto'
import store from './src/store';

export type RootStackParamList = {
  Home: undefined
  Screen: { name: string }; 
  Crypto: undefined
  Section: { name: string };
};

const RootStack = createStackNavigator<RootStackParamList>();

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: "white"
  }
}

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <RootStack.Navigator screenOptions={{headerShown: false}}
        initialRouteName="Home">
          <RootStack.Screen name="Home" component={Home}/>
          <RootStack.Screen name="Crypto" component={Crypto}/>
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
