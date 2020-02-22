import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import styled from 'styled-components/native'

const App = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>hello</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  text: {
    color: 'darkslateblue',
    fontSize: 40
  }
})
export default App