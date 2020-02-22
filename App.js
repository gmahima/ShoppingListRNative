import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import styled from 'styled-components/native'
import Header from './components/Header'
import {uuid} from 'uuidv4'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

const App = () => {
  const [items, setItems] = useState([
    {name: 'Soy Sauce', id: uuid()},
    {name: 'Milk', id: uuid()},
    {name: 'Butter', id: uuid()},
    {name: 'Melon', id: uuid()},
    {name: 'Butter', id: uuid()},
])
const handleRemoveItem = (id) => {
  console.log("hi")
  setItems((prevItems) => prevItems.filter((i) => (i.id!== id)))
}
const handleAddItem = (name) =>{
  setItems([...items, {name, id: uuid()}])
}
  return(
    <View style={styles.container}>
      <Header title='My Shopping List'></Header>
      <AddItem addItem={handleAddItem}/>
      <FlatList data={items} renderItem={({item}) => (<ListItem item={item} removeItem={handleRemoveItem}/>)} />

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App