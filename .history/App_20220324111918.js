import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function App() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.textInput_Wrapper}>
        <TextInput
          value={text}
          onChangeText={(text) => setText(text)}
          style={styles.TextInput}
          mode="outlined"
          placeholder={'Enter your u'}
        />
      </View>
    </View>
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
