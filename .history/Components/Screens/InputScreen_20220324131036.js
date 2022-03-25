import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InputScreen = () => {
  return (
    <View style={styles.container}>
    <View style={styles.textInput_Wrapper}>
      <TextInput
        value={text}
        onChangeText={(text) => setText(text)}
        style={styles.TextInput}
        mode="outlined"
        placeholder={'Enter your username'}
      />
    </View>
  </View>
   
   
  )
}

export default InputScreen

const styles = StyleSheet.create({

})