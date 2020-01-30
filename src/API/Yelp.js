import axios from 'axios';

//create YELP API authorization

export default axios.create ({
   
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer sx03F6o-MhoX66Dczi3HcExF36iTerGHEmxjQlPVn1RZyGyiIJkNEW53PDFBgnYafYrRex8mFRVp6hhOCU1A_LTafCOroeGq8tCd8OCAxoZPlvsdq9C4t0qms-kyXnYx'
    }
});

