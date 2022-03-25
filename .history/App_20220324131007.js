import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function App() {
  const [text, setText] = useState("");
  return (
   styles.container}>
   ={styles.textInput_Wrapper}>
   t
   text}
   eText={(text) => setText(text)}
   styles.TextInput}
   utlined"
   lder={'Enter your username'}
   
   
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 10,
  },

  textInput_Wrapper: {
    justifyContent: "center",
    marginTop : 200
  },
  TextInput: {},
});
