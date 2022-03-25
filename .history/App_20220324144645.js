import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import InputScreen from "./Components/Screens/InputScreen";
import RepoScreen from "./Components/Screens/Repo";
import { createStore, applyMiddleware, compose } from "redux";
import Reducer from "./Components/Reducers/Reducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import Display from "./Components/Screens/Display";



const Store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default function App() {
  const Stack = createNativeStackNavigator();
 
 
 
 
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="display">
          <Stack.Screen name="Input" component={InputScreen} />
          <Stack.Screen name="repo" component={RepoScreen} />
          <Stack.Screen name="display" component={Display} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
