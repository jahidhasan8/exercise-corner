

import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Exercises.css'
const Exercises = () => {
    const[exercises, setExercises]=useState([])
      
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=>setExercises(data))
  },[])
  
    return (
        <div className>
            <h1>Daily Exercises List</h1>

           <div className='exercises-container'>
           <div className="exercises">
                
                {
                    exercises.map(exercise=><Exercise exercise={exercise} key={exercise.key}></Exercise>)
                }
            </div>
            <div className="info-cart">
                <h4>info cart</h4>
            </div>
           </div>
        </div>
    );
};

export default Exercises;