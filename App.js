import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer}from '@react-navigation/native';
import {createStackNavigator}from '@react-navigation/stack';

import Home from "./screens/Home";
import DailyPicScreen from "./screens/DailyPic";
import SpaceCraftScreen from "./screens/SpaceCraft";
import StarMapScreen from "./screens/StarMap";


function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown:false
      }}>
        <StackScreen name="Home" component ={HomeScreen}/>
        <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
        <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen}/>
        <Stack.Screen name="StarMap" component={StarMapScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


