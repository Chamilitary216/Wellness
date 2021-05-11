import axios from "axios";


//USDA SEARCH QUERY REQUIREMENTS

const USDA_BASEURL = `${process.env.REACT_APP_USDA_BASE_URL}`;
const API_ASK = "?api_key=";
const USDA_API_KEY = `${process.env.REACT_APP_USDA_API_KEY}`;
const query = "&query=";
const pages = "&pageSize=20";


//Rapid API Query REQUIREMENTS
const RAPID_API_KEY = `${process.env.REACT_APP_RAPID_API_KEY}`;

export default{
    getData: (search) => 
        axios({
            'method': 'GET',
            'url': USDA_BASEURL+API_ASK+USDA_API_KEY+query+search+pages,
        }),

    getDataTwo: (search) =>
        axios({
            'method':'GET',
            'url':'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
            'headers': {
                'x-rapidapi-key':RAPID_API_KEY,
                'x-rapidapi-host':'edamam-food-and-grocery-database.p.rapidapi.com'
            },
            'params': {'ingr': search},
        }),

        getDataThree: (search) =>
        axios({
            'method':'GET',
            'url': 'https://nutritionix-api.p.rapidapi.com/v1_1/search/'+search,
            'headers': {
            'x-rapidapi-key':RAPID_API_KEY,
            'x-rapidapi-host':'nutritionix-api.p.rapidapi.com'
            },
            'params': {'fields': 'item_name,item_id,brand_name,nf_calories,nf_total_fat'},
        }),

    
};