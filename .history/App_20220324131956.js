import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
     <Stack.Navigator></Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
