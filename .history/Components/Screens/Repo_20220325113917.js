import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import getMoviesFromApiAsync from "../Reducers/Action";

const RepoScreen = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.repo);

  useEffect(() => {
    dispatch(() => {
      getMoviesFromApiAsync(rou);
    });
  }, []);
  return (
    <View>
      <Text>{state.full_name}</Text>
    </View>
  );
};

export default RepoScreen;

const styles = StyleSheet.create({});
