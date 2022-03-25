import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet} from "react-native";
import InputScreen from "./Components/Screens/InputScreen";
import RepoScreen from "./Components/Screens/Repo";
import { createStore, applyMiddleware, compose } from 'redux';
import Reducer from "./Components/Reducers/Reducer";
import thunk from "redux-thunk";


export default function App() {
  const Stack = createNativeStackNavigator()
  const Store =createStore(Reducer,applyMiddleware(thunk))
  return (
    <Pro
    <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Input" component = {InputScreen}/>
       <Stack.Screen name="repo" component = {RepoScreen}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
