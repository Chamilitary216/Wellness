import React, { useState } from "react";
import TableHeadingOne from "../TableHeadingOne";
import "./style.css"

function SearchResultsOne(props){  
    console.log(props.items)
    const [numberArray, setnumberArray] = useState(["203", "204","205","208","269","307","401"])


    return(
        <div>
            <table className="table">
                <TableHeadingOne/>
            
                {Array.isArray(props.items) && props.items.map(({ brandOwner,dataType, description, fdcId ,foodNutrients}, i) => (
                <tbody className="tablesearchone">
                    <tr key={i}>
                        <th scope="row" className="tablesearchone">#</th>
                        <td className="tablesearchone">{brandOwner}</td>
                        <td className="tablesearchone">{dataType}</td>
                        <td className="tablesearchone">{description}</td>
                        <td className="tablesearchone">{fdcId}</td>
                        {foodNutrients.filter(item=> numberArray.includes(item.number)).map((food,j) =>
                        <td key={j}>{food.name} Amount: {food.amount} {food.unitName}</td>)}
                    </tr>
                </tbody>
                ))
            }
            </table>
        </div>
        
    );
}

export default SearchResultsOne;