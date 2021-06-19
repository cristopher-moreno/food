//MODULES
import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';

//EXPORT → IMPORT


//MAIN
const SearchBar = () => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" size={24} color="black" />
            <TextInput
                placeholder="Search"
                autoCapitalize="none"
                style={styles.inputStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 10,
        margin: 50,
        //padding: "3%",
        borderRadius: 20,
        flexDirection: "row"
    },
    inputStyle: {
        borderColor: "gray",
        borderWidth: 1,
        flex: 1 
    }
})

export default SearchBar