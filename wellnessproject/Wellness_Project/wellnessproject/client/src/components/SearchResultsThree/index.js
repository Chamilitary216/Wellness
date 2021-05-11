import React from "react";
import "./style.css";

function SearchResultsThree(props){

    console.log(props.item)

    return(
        <div>
            <table className="table">
                <thead className="thead-dark tableheadingtwo">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" data-column="one">Brand Name</th>
                        <th scope="col" data-column="two">Item Name</th>
                        <th scope="col" data-column="three">Calories</th>
                        <th scope="col" data-column="four">Serving Size</th>
                        <th scope="col" data-column="five">Serving Unit</th>
                        <th scope="col" data-column="six">Total Fat</th>
                    </tr>
                </thead>
                <tbody>
                    {props.item.map(({fields},i) => (
                    <tr key={i} className="trone">
                        <th scope="row" className="tablethree">1</th>
                        <td className="tablethree">{fields.brand_name}</td>
                        <td className="tablethree">{fields.item_name}</td>
                        <td className="tablethree">{fields.nf_calories}</td>
                        <td className="tablethree">{fields.nf_serving_size_qty}</td>
                        <td className="tablethree">{fields.nf_serving_size_unit}</td>
                        <td className="tablethree">{fields.nf_total_fat}</td>
                        </tr>
                        ))
                        }
                </tbody>
            </table>

        </div>
    );


}

export default SearchResultsThree;