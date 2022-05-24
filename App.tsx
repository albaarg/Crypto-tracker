import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import Home from './src/screens/Home/Home'
import Crypto from './src/screens/Crypto';


const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: "transparent"

  }
}

const App = () => {

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}}
      initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Crypto" component={Crypto}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
};


export default App;
