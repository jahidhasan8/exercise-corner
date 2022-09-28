

import React from 'react';
import './Exercise.css'

const Exercise = ({exercise}) => {
    const{key,name,time,description,age,img}=exercise
    
    return (
        <div className='card'>
            <img src={img} alt="" />
             <div className='card-info'>
             <h4>{name}</h4>
              <p>{description? description.slice(0,60):'N/A'}</p>
              <p>Age: {age}</p>
              <p>Time : {time}</p>
             </div>
              <button className='card-btn'>
                <p className='btn-text'>Add To List</p>
              </button>
        </div>
    );
};

export default Exercise;