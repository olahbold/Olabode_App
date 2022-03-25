import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button,  TextInput } from "react-native-paper";

const InputScreen = ({ navigation }) => {
    const [text, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query)
  return (
    <View style={styles.container}>
      <View style={styles.textInput_Wrapper}>
      <TextInput
      placeholder="Enter your username"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
       
       
       
       
       
       

        <Button onPress={() => navigation.navigate("repo")}>Enter</Button>
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
