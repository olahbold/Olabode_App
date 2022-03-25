import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import InputScreen from "./Components/Screens/InputScreen";
import RepoScreen from "./Components/Screens/Repo";



import { Provider } from "react-redux";

import Display from "./Components/Screens/Display";
import { Store } from "./Components/Reducers/Store";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={Storeore}>
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
