import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const AddItem  = ({addItem}) => {

    const [text, setText] = useState('')
    const handleChange = (val) => {
        setText(val)      
    }
    const handlePress = () => {
        console.log(text)
        addItem(text);
    }
    return(
        <View>
            <TextInput placeholder='enter item' onChangeText={handleChange}/>
            <TouchableOpacity onPress={handlePress}>
                <Text><Icon name="plus" size={20}/> add item</Text>
            </TouchableOpacity>
        </View>
    )
}
export default AddItem

