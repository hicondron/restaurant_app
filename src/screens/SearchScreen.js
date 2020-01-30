import React, {useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar.js'
import yelp from '../API/Yelp'

//create Search Screen

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState ([]);

    const searchApi = async () => {
        const response = await yelp.get('/search', {
        params: {
            limit: 50,
            term: term,
            location: 'charleston'
        }
    });
        setResults(response.data.businesses);
 };
// add results counter
    return (
    <View>
        <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={searchApi}
        />
        <Text>Search Screen</Text>
        <Text> We have found {results.length} results.</Text>
    </View>
    );
};


const styles= StyleSheet.create({});

export default SearchScreen;