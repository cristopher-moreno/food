//MODULES
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

//EXPORTS → IMPORTS
import SearchBar from '../components/SearchBar'


//MAIN
const SearchScreen = () => {
    return (
        <View>
            <SearchBar />
            <Text>
                🌟 Search Screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SearchScreen