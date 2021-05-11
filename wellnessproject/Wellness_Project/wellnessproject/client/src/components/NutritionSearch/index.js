import React from "react";
import IndexPageOne from "../SearchIndexOne";
import IndexPageTwo from "../SearchIndexTwo";
import IndexPageThree from "../SearchIndexThree";
import NutritionStart from "../NutritionStart";
import "./style.css"

function NutritionBegin(){
    return(
        <div className="main">
            <div className="row areaone">
                <div className="col-xl-12">

                </div>
            </div>
            <div className="row">
                <div className="col-xl-12 nutritionheadline">
                <NutritionStart/>
                </div>
                <div className="col-xl-9">
                    <IndexPageThree/>
                    <IndexPageOne/>
                </div>
                <div className="col-xl-3">
                <IndexPageTwo/>

                </div>

   
            </div>
        </div>
    )
}

export default NutritionBegin;