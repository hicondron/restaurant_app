import React, {useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar.js';
import useRestaurants from '../Hooks/useRestaurants.js';

//create Search Screen

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useRestaurants();

// add results counter
    return (
    <View>
        <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
        />
       {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text> We have found {results.length} results.</Text>
    </View>
    );
};


const styles= StyleSheet.create({});

export default SearchScreen;