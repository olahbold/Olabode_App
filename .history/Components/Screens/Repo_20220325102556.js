import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-native-paper";
import getMoviesFromApiAsync from "../Reducers/Action";

const RepoScreen = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.repo);

  useEffect(() => {
    dispatch(() => {
      getMoviesFromApiAsync();
    });
  }, []);
  return (
    <View>
      <Text>{state.full_}</Text>
    </View>
  );
};

export default RepoScreen;

const styles = StyleSheet.create({});
