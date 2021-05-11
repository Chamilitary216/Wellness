import React from 'react';

const FitnessExcersizes = ({ muscles, excersize}) => {

    const listOfExcersizes = excersize.map((e) =>
    <div>
        <li key={e} className='list-item'>
            {e}
        </li>
    </div>
    );

    return (
        <div className='content'>
            <div className='excersizes col-md-12'>
               <h3 className='col-md-12 fitness-headers'>Muscle Group: {muscles} </h3>
            </div>
            <ul className='row'>
                <div className='col-md-12'>
                    <p className>{listOfExcersizes}</p>
                </div>
            </ul>
        </div>
        
    )
}

export default FitnessExcersizes;