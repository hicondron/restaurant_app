import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar.js';
import useRestaurants from '../Hooks/useRestaurants.js';
import RestaurantsList from '../components/RestaurantsList';

//create Search Screen

const SearchScreen = ()=> {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useRestaurants();

//helper function to help with grouping

const filterRestaurantsByPrice = (price) => {
    return results.filter(result => {
        return result.price === price;
    })

}
// add results counter
    return (
    <>
        <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
        />
       {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
        <RestaurantsList results={filterRestaurantsByPrice('$')} title="Economical Restaurants" 
        />
        <RestaurantsList results={filterRestaurantsByPrice('$$')}title="Mid-Range Restaurants"
       />
        <RestaurantsList results={filterRestaurantsByPrice('$$$')}title= "Spendy Restaurants"
        />
        </ScrollView>
    </>
    );
};


const styles= StyleSheet.create({});

export default SearchScreen;