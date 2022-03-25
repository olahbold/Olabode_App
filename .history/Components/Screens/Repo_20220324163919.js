import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-native-paper";

const RepoScreen = (props) => {
  const Dispatch = useDispatch();
  const State = useSelector((state) => state.title);
  return (
    <View>
      <Text>
        {State.map((n) => (
          <Text>{n.title} </Text>
        ))}
      </Text>
      <Button onPress={() => {Disp}}>Press</Button>
    </View>
  );
};

export default RepoScreen;

const styles = StyleSheet.create({});
