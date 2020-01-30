import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import SearchBar from './src/components/SearchBar'

const SearchScreen = () => {
    return (
    <View>
        <SearchBar />
        <Text>Search Screen</Text>
    </View>
    );
};


const styles= StyleSheet.create({});

export default SearchScreen;