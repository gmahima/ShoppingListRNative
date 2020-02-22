import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const ListItem = ({item, removeItem}) => {
    
    return(
        <TouchableOpacity style={styles.li}>
            <View style={styles.liv}>
            <Text style={styles.text}>{item.name}</Text>
            <Icon name="remove" size={20} color= 'red' onPress={() =>removeItem(item.id)}/>
            </View>
            
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    li: {
        padding: 15,
        backgroundColor: 'papayawhip',
        borderBottomWidth: 1,
        borderBottomColor: "yellow"

    },
    liv: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 18
    }
})
export default ListItem