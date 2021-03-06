import React from 'react';
import { View, TextInput, Button, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

//create SearchBar component

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    

    return (
    <View style= {styles.backgroundStyle} >
        <Feather name="search" style={styles.iconStyle}/>
        <TextInput 
            autoCapitalize= "none"
            autoCorrect={false}
            style={styles.inputStyle}placeholder="Search" 
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
    </View>
    );
};

// Add styling
const styles= StyleSheet.create({

    backgroundStyle: {
        backgroundColor: 'rgb(226, 226, 226)',
        height: 35,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 15,
    },

    inputStyle: {
        flex: 1,
        fontSize: 18,
    },

    iconStyle: {
        alignSelf: 'center',
        fontSize: 25,
        marginHorizontal: 15,
    
    }

});

export default SearchBar;