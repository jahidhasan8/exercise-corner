

import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Exercise from '../Exercise/Exercise';
import './Exercises.css'
const Exercises = () => {
    const[exercises, setExercises]=useState([])
    const[info, setInfo]=useState([])
      
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=>setExercises(data))
  },[])
    
  const handleAddToCart=(exercise)=>{
     const newInfo=[...info,exercise]
     setInfo(newInfo)
    //  console.log(exercise);
  }

    
    return (
        <div >
           
           <div className='exercises-container'>
           <div className="exercises">
                
                {
                    exercises.map(exercise=><Exercise 
                        exercise={exercise}
                         key={exercise.key}
                         handleAddToCart={handleAddToCart}
                    
                    ></Exercise>)
                }
            </div>
            <div className="info-cart">
                <Cart info={info}></Cart>
                
            </div>
           </div>
           
        </div>
    );
};

export default Exercises;