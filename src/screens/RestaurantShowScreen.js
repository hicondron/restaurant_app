import React,  {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList,Image, ScrollView} from 'react-native';
import yelp  from '../API/Yelp';



const RestaurantShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id= navigation.getParam('id');
  
    const getRestaurant = async (id) => {
        const response= await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getRestaurant(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            
            <Text style={styles.text}>{result.name}</Text>
            <Text style={styles.text}>{result.display_phone}</Text>   
            <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) => {
                return (
                    <Image style={styles.image} source={{uri: item }} />
                );
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        marginTop: 10,
        marginHorizontal: 60,
        width: 300,
        height: 175,
        borderRadius: 4,
        marginBottom: 5,
        
    },
    text: {
        textAlign: 'center',
        fontSize: 24,
        
    },
    
});

export default RestaurantShowScreen;