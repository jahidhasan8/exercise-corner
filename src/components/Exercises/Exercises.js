

import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Exercise from '../Exercise/Exercise';
import './Exercises.css'

const Exercises = () => {
    // set data on state
    const[exercises, setExercises]=useState([])
    // set card info data
    const[info, setInfo]=useState([])
      
    // loading data through useEffect, using fetch
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=>setExercises(data))
  },[])
    
  const handleAddToCart=(exercise)=>{
     const newInfo=[...info,exercise]
     setInfo(newInfo)
    
  }

    
    return (
        <div >
           
           <div className='exercises-container'>
           <div className="exercises">
                
             {/* using map and transfer data to another component */}
             {/* uses key */}
                {
                    exercises.map(exercise=><Exercise 
                        exercise={exercise}
                         key={exercise.key}
                         handleAddToCart={handleAddToCart}
                    
                    ></Exercise>)
                }
            </div>
            <div className="info-cart">
                {/* transfer per click card info data */}
                <Cart info={info}></Cart>
                
            </div>
           </div>
           
        </div>
    );
};

export default Exercises;