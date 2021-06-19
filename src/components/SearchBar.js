//MODULES
import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';

//EXPORT → IMPORT


//MAIN
const SearchBar = () => {
    return (
        <View style={styles.background}>
            <Feather name="search" size={24} color="black" />
            <TextInput placeholder="Search" autoCapitalize="none" />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 10,
        margin: 50,
        padding: "3%",
        borderRadius: 20,
        flexDirection: "row"
    }
})

export default SearchBar