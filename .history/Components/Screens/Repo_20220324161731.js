import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const RepoScreen = (props) => {
  const Dispatch = useDispatch()
  const State = useSelector(state => state.title)
  return (
    <View>
      <Text>{State.map(n => <Text>{n.tit} </Text>)}</Text>
    </View> 
  )
}

export default RepoScreen

const styles = StyleSheet.create({})