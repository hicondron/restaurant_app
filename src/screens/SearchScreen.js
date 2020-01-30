import React, {useState} from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar.js'

//create Search Screen

const SearchScreen = () => {
    const [term, setTerm] = useState('');

    return (
    <View>
        <SearchBar 
        term={term} 
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log('the term was submitted')}
        />
        <Text>Search Screen</Text>
    </View>
    );
};


const styles= StyleSheet.create({});

export default SearchScreen;