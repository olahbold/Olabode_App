import { StyleSheet, Text, View } from "react-native";
import React,{useState} from "react";
import { Button, TextInput } from "react-native-paper";

const InputScreen = () => {
    const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.textInput_Wrapper}>
        <TextInputInput
          value={text}
          onChangeText={(text) => setText(text)}
          style={styles.TextInput}
          mode="outlined"
          placeholder={"Enter your username"}
        />

        <Buttontton
          icon="camera"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
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
