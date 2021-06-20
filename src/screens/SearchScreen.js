//MODULES + LIBRARIES
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

//EXPORTS → IMPORTS
import SearchBar from '../components/SearchBar'


//BODY
const SearchScreen = () => {

    const [term, setTerm] = useState('')

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => { setTerm(newTerm) }}    /* ← this is a new callback*/
                onTermSubmit={() => { console.log('SUBMITTED') }}   /* ← this is a new callback*/
            />
            <Text>🌟 Search Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SearchScreen