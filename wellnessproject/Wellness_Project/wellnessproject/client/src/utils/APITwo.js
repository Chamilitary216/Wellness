import axios from "axios";

const RAPID_API_KEY=`${process.env.REACT_APP_RAPID_API_KEY}`


export default{
    getDataThree: (search) =>
    axios({
        'method':'GET',
        'url': 'https://nutritionix-api.p.rapidapi.com/v1_1/search/'+search,
        'headers': {
        'x-rapidapi-key':RAPID_API_KEY,
        'x-rapidapi-host':'nutritionix-api.p.rapidapi.com'
        },
        'params': {'fields': 'item_name,item_id,brand_name,nf_calories,nf_total_fat'},
    })

}
