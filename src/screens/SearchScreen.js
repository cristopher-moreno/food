//IMPORTS
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
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
            
            //debug
            let arr = response.data.businesses
            arr.map((e)=>{
                console.log(`debug → ${e.id}`)
            })

            setApiResults(response.data.businesses)
            
        } catch (error) { console.log(error) }
    }

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={(e) => { setTerm(e) }}    
                onTermSubmit={() => { apiSearch() }}
            />
            <Text>🌟 Search Screen</Text>
            <Text>Found → {apiResults.length} restaurants</Text>
        </View>
    )
}

const styles = StyleSheet.create({ })

export default SearchScreen