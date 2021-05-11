import React from "react";
import "./style.css"


function TableHeadingOne(){
    return (
    
    <thead className="thead-dark tableheadingone">
            <tr>
                <th>#</th>
                <th scope="col" data-column="one">Brand</th>
                <th scope="col" data-column="two">Data Type</th>
                <th scope="col" data-column="three">Description</th>
                <th scope="col" data-column="four">fdcId</th>
                <th scope="col" data-column="five">Protein (g)</th>
                <th scope="col" data-column="six">Total Fat</th>
                <th scope="col" data-column="six">Total Carbs</th>
                <th scope="col" data-column="six">Energy</th>
                <th scope="col" data-column="six">Sugars</th>
                <th scope="col" data-column="six">Sodium</th>
                <th scope="col" data-column="six">Vitamin C</th>
            </tr>
        </thead>

    );

}

export default TableHeadingOne;