import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet} from "react-native";
import InputScreen from "./Components/Screens/InputScreen";
import RepoScreen from "./Components/Screens/Repo";
import { createStore, applyMiddleware, compose } from 'redux';

export default function App() {
  const Stack = createNativeStackNavigator()
  const Store =createStore(redu)
  return (
    <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Input" component = {InputScreen}/>
       <Stack.Screen name="repo" component = {RepoScreen}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
