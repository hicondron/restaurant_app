import {useState, useEffect} from 'react';
import yelp from '../API/Yelp';

export default () => {
    const [results, setResults] = useState ([]);
    const [errorMessage, setErrorMessage] = useState('');
//add async function / error handling
        const searchApi = async searchTerm => {
            try {
            const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'charleston',
            }
        });
        setResults(response.data.businesses);
    }  catch (err) {
        setErrorMessage('Oops! Something Went Wrong. Try Again.');
    }
};

// add immediate use of searchApi for results to display initially

    useEffect (() => {
        searchApi('sushi');
    }, []);

    return [searchApi, results, errorMessage];
};