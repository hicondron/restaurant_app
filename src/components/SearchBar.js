import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const SearchBar = () => {
    return (
    <View style= {styles.background} >
        <Text>Search Bar</Text>
    </View>
    );
};


const styles= StyleSheet.create({

    background: {
        backgroundColor: '#F0EEE',
    }


});

export default SearchBar;