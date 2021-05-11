import React from "react";
import "./style.css";

function SearchFormThree(props){
    return(
      <form className="search searchformthree">
        <div className="form-group">
            <label htmlFor="language">Nutritionix Database</label>
              <input
              value={props.search}
              onChange={props.handleInputChangeThree}
              name="term"
              type="term"
              className="form-control"
              placeholder="Example Search: 'Chicken'"
              id="search"
              />
            </div>
        </form>
    );
}

export default SearchFormThree;