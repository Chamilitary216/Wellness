import React, { useEffect, useState} from "react";
import SearchFormOne from "../SearchFormOne/";
import API from "../../utils/API";
import SearchResultsOne from "../SearchResultsOne/index";

const IndexPageOne = () => {
    const [search, setSearch] = useState("");
    const [items, setItems] = useState([]);
    const [error, setError] = useState("");
    
    useEffect(() => {
        if(!search){
            return;
        } else if (items === []) {
            return;
        }

        API.getData(search)
        .then((res)=>{
            if (res.data.length === 0){
                throw new Error ("No results found");
            }
            if(res.data.status === "error"){
                throw new Error(res.data.message);
            }
            console.log(res)
            console.log(res.data)
            setItems(res.data)
        })
        .catch(err=> setError(err));
    },[search]);

    const handleInputChange = event => {
        event.preventDefault();
        setSearch(event.target.value);
        console.log(event.target.value);
    }


    return(
        <div>
            <SearchFormOne
            handleInputChange={handleInputChange}
            result={search}
            />
            <SearchResultsOne
              items={items}           
            />
        </div>
    )
}

export default IndexPageOne;