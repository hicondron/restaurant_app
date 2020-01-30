import React, {useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar.js'
import yelp from '../API/Yelp'

//create Search Screen

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState ([]);
    const [errorMessage, setErrorMessage] = useState('');
//add async function / error handling
        const searchApi = async () => {
            try {
            const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: term,
                location: 'charleston'
            }
        });
        setResults(response.data.businesses);
    }  catch (err) {
        setErrorMessage('Oops! Something Went Wrong.  Try Again.');
    }
};
// add results counter
    return (
    <View>
        <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={searchApi}
        />
       {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text> We have found {results.length} results.</Text>
    </View>
    );
};


const styles= StyleSheet.create({});

export default SearchScreen;