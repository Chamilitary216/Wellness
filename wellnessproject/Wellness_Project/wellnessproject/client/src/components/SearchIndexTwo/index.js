import { useEffect, useState} from "react";
import SearchFormTwo from "../SearchFormTwo";
import SearchResultsTwo from "../SearchResultsTwo";
import API from "../../utils/API";

const IndexPageTwo = () => {
    const [ search, setSearch ] = useState("");
    const [ items, setItems ] = useState([]);
    const [ error, setError ] = useState("");

    useEffect(() => {
        if(!search){
            return;
        }
        API.getDataTwo(search)
        .then((res)=>{
            console.log(res.data);
            console.log(res.data.hints)
            setItems(res.data.hints)
        })
        .catch(err => setError(err));
    }, [search]);

    const handleInputChangeTwo = event => {
        setSearch(event.target.value);
        console.log(event.target.value);
    }

    return(
        <div>
            <SearchFormTwo
            handleInputChangeTwo={handleInputChangeTwo}
            results={search}
            />
            <SearchResultsTwo
            items={items}
            />
        </div>
    )

}

export default IndexPageTwo;