import React from "react";
import "./style.css";

function SearchResultsTwo(props){
    
    console.log(props.items)
    
    const getNutrients = (nutrients) => {
        const nutrientArray = []
        for (const nutrient in nutrients){
            nutrientArray.push([nutrient,nutrients[nutrient]])
        }
        return nutrientArray;

    }

    return(  
        <div className="carddiv" style={{ width:'20rem'}}>
        {props.items.map(({food},i) => (
            <div key={i} className="card picturecard alert alert-secondary">
                <img className="img-card-top" src={food.image} alt="food image"></img>
                <div className="card-body">
                    <h5 className="card-title foodtext btn btn-success btn-lg">Selected Food: {food.label}</h5>
                </div>
                
                {getNutrients(food.nutrients).map((nutrient,j) => (
                    <ul key={j} className="list-group-flush">
                        <li className="listtext btn btn-light btn-lg">{nutrient[0]+": "+nutrient[1].toString().slice(0,5)}</li>
                    </ul>
                ))

              }
            </div>
        ))}  
    </div>
        
    );
}

export default SearchResultsTwo;