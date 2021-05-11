import React from "react";
import "./style.css";



function SearchFormOne(props){
    console.log(props)
    return(
          <form className="search searchformone">
            <div className="form-group">
                <label htmlFor="language">USDA Search for Food Nutrients</label>
                <input
                  value={props.search}
                  onChange={props.handleInputChange}
                  name="term"
                  type="term"
                  className="form-control"
                  placeholder="Search Example: 'apples'"
                  id="search"
                />
            </div>
        </form>
    );
}

export default SearchFormOne;