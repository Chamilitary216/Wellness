import axios from "axios";


const USDA_BASEURL = `${process.env.REACT_APP_USDA_BASE_URL}`;
const API_ASK = "?api_key=";
const USDA_API_KEY = `${process.env.REACT_APP_USDA_API_KEY}`;
const query = "&query=";

export default{
    getData: (search) => 
        axios({
            'method': 'GET',
            'url': USDA_BASEURL+API_ASK+USDA_API_KEY+query+search,
        })
}