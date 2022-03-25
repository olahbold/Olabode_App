import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet} from "react-native";
import InputScreen from "./Components/Screens/InputScreen";

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Input" component = {InputScreen}/>
       <Stack.Screen name="Input" component = {InputScreen}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
