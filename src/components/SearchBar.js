//MODULES + LIBRARIES
import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';

//EXPORT → IMPORT


//BODY
//PASSING VALUES FROM A PARENT COMPONENT → CHILD COMPONENT AS AN ARGUMENT
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" size={24} color="black" style={styles.iconStyle} />
            <TextInput
                style={styles.inputStyle}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder="Search"
                autoCapitalize="none"
                value={term}

                /*onChangeText={(newTerm) => { onTermChange(newTerm) }} ← IT'S THE SAME*/
                onChangeText={onTermChange}
                /*onEndEditing={()=>{console.log('DONE')}}*/
                onEndEditing={onTermSubmit}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: "row"
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
})

export default SearchBar