import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";

const InputScreen = ({navigate}) => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.textInput_Wrapper}>
        <TextInput
          value={text}
          onChangeText={(text) => setText(text)}
          style={styles.TextInput}
          mode="outlined"
          placeholder={"Enter your username"}
        />

        <Button onPress={() => navigate.goto}>Enter</Button>
      </View>
    </View>
  );
};

export default InputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 10,
  },
  textInput_Wrapper: {
    justifyContent: "center",
    marginTop: 200,
  },
  TextInput: {},
});
