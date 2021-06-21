//MODULES + LIBRARIES
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

//EXPORTS → IMPORTS
import SearchBar from '../components/SearchBar'
import Yelp from '../api/yelp'


//BODY
const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [apiResults, setApiResults] = useState([]) /* ← it's expected to recieve an array as a response from API*/

    const apiSearch = async () => {
        try {
            const response = await Yelp.get('/search', {
                params: {
                    limit: 50,
                    term: term,
                    location: 'san jose'
                }
            })
            //console.log(response.data.businesses)
            setApiResults(response.data.businesses)
        } catch (error) { console.log(error) }
    }

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => { setTerm(newTerm) }}    /* ← this is a new callback*/

                /*onTermSubmit={() => { apiSearch() }}    ← this is a new callback*/
                onTermSubmit={apiSearch}   /* ← ES6: Only needs to pass the callback*/
            />
            <Text>🌟 Search Screen</Text>
            <Text>Found → {apiResults.length} restaurants</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SearchScreen