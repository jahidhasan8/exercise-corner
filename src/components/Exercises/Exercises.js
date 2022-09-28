

import React, { useEffect, useState } from 'react';
import './Exercises.css'
const Exercises = () => {
    const[exercises, setExercises]=useState([])
      
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
  },[])
  
    return (
        <div className>
            <h1>Daily Exercises List</h1>

           <div className='exercises-container'>
           <div className="exercises">
                <h4>hello all</h4>
            </div>
            <div className="info-cart">
                <h4>info cart</h4>
            </div>
           </div>
        </div>
    );
};

export default Exercises;