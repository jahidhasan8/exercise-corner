

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
        <div >
            <h1>Daily Exercises List</h1>

           <div className='exercises-container'>
           <div className="exercises">
                
                {
                    exercises.map(exercise=><Exercise exercise={exercise} key={exercise.key}></Exercise>)
                }
            </div>
            <div className="info-cart">
                <div>
                <h4>Jahid Hasan</h4>
                <small>Dhaka, Bangladesh</small>
                </div>
                <div className='personal-info'>
                    <h5>75 <small>Weight</small></h5>
                    <h5>5.5 <small>Height</small></h5>
                    <h5>26 <small>Years</small></h5>
                </div>

                <div className='btn-time'>
                    <h5>Add A Break</h5>
                     <button>1h</button>
                     <button>2h</button>
                     <button>3h</button>
                     <button>4h</button>
                </div>

                <div className='details'>
                    <h5>Exercise Details</h5>
                    <div className='e-time'>
                        <small>Exercise time :</small>
                    </div>
                    <div className='b-time'>
                        <small>Break time :</small>
                    </div>
                </div>

                <button className='activity-btn'>Activity Done</button>
                
            </div>
           </div>
           
        </div>
    );
};

export default Exercises;