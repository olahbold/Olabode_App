import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-native-paper";
import getMoviesFromApiAsync from "../Reducers/Action";

const RepoScreen = (props) => {
  const Dispatch = useDispatch();
  const state = useSelector((state) => state.title);

  useEffect(() => {
    Dispatch(() => {
      getMoviesFromApiAsync();
    });
  }, []);
  return (
    <View>
      <Text>{state}</Text>
      <Button
        onPress={() => {
          Dispatch(getMoviesFromApiAsync());
        }}
      >
        Press
      </Button>
    </View>
  );
};

export default RepoScreen;

const styles = StyleSheet.create({});
