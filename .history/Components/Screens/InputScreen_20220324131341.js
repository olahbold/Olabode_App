import { StyleSheet, Text, View } from "react-native";
import React from "react";

const InputScreen = () => {
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

<Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
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
