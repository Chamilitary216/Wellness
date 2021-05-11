import { useEffect, useState } from "react";
import SearchFormThree from "../SearchFormThree";
import SearchResultsThree from "../SearchResultsThree"
import API from "../../utils/API";

const IndexPageThree = () => {
    const [ search , setSearch ] = useState("");
    const [ items, setItems] = useState([]);
    const [ error, setError] = useState("");

    useEffect(() => {
        if(!search){
            return;
        }

        API.getDataThree(search)
        .then((res) => {
            console.log(res.data);
            console.log(res.data.hits);
            setItems(res.data.hits);
        })
        .catch(err => setError(err));
    }, [search]);

    const handleInputChangeThree = event => {
        setSearch(event.target.value);
        console.log(event.target.value);
    }

    return(
        <div>
            <SearchFormThree
            handleInputChangeThree={handleInputChangeThree}
            results={search}
            />
            <SearchResultsThree
            item={items}
            />

        </div>
    )

}

export default IndexPageThree;