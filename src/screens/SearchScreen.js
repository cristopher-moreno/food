//IMPORTS
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useYelp from '../hooks/useYelp'

//BODY
const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [apiSearch, apiResults, errorMessage] = useYelp()


    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={(e) => { setTerm(e) }}
                onTermSubmit={() => { apiSearch(term) }}
            />
            {/**ERROR HANDLING: if exist → show the error */}
            {(errorMessage) ? (<Text>{errorMessage}</Text>) : (null)}

            <Text>Found → {apiResults.length} restaurants</Text>

        </View>
    )
}

//STYLES
const styles = StyleSheet.create({})

//EXPORT
export default SearchScreen





// IN CASE OF EMERGENCY:

/**
//IMPORTS
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import Yelp from '../api/yelp'

//BODY
const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [apiResults, setApiResults] = useState([])
    const apiSearch = async (keyword) => {
        //limpiando variables
        setErrorMessage('')

        console.log(`RECIEVED → ${keyword}`)

        try {

            //ASKING FOR:
            //Trying to get restaurants based on 'keyword'
            //TO(LOCAL) ← FROM(API)

            const response = await Yelp.get('/search', {
                params: {
                    limit: 25,
                    term: keyword,
                    location: 'san jose'
                }
            })

            //debug
            let arr = response.data.businesses
            arr.map((keyword) => { console.log(`debug → ${keyword.id}`) })
            console.log(`======================`)
            //end debug

            //SAVE:
            //saving the list of elements FROM(RESPONSE)→TO(apiResults)
            setApiResults(response.data.businesses)

        } catch (error) {
            console.log(error)
            setErrorMessage(`... ejem`)
        }
    }

    //initial render
    useEffect(()=>{console.log('INITIAL RENDER'); apiSearch('pasta')},[])


    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={(e) => { setTerm(e) }}
                onTermSubmit={() => { apiSearch(term) }}
            />
             {(errorMessage) ? (<Text>{errorMessage}</Text>) : (null)}

            <Text>Found → {apiResults.length} restaurants</Text>

        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen
 */