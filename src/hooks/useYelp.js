import React, { useState, useEffect } from 'react'
import Yelp from '../api/yelp'

//EXPORT
export default (() => {
    const [errorMessage, setErrorMessage] = useState('')
    const [apiResults, setApiResults] = useState([]) /* ← it's expected to recieve an array as a response from API*/

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
    useEffect(() => { console.log('INITIAL RENDER'); apiSearch('pasta') }, [])

    return ([apiSearch, apiResults, errorMessage])
})

