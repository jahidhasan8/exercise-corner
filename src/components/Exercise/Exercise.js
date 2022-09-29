

import React from 'react';
import './Exercise.css'

const Exercise = ({exercise,handleAddToCart}) => {
    const{name,time,description,Age,img}=exercise
    
    
    return (
        <div className='card'>
            <img src={img} alt="" />
             <div className='card-info'>
             <h4>{name}</h4>
              <p>{description? description.slice(0,80):'N/A'}</p>
              <p>Age: {Age}</p>
              <p>Time : {time} hour</p>
             </div>
              <button onClick={()=>handleAddToCart(exercise)} className='card-btn'>
                <p className='btn-text'>Add To List</p>
              </button>
        </div>
    );
};

export default Exercise;