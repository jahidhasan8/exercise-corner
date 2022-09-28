

import React, { useState } from 'react';
import './Cart.css'


const Cart = ({ info }) => {
    //  console.log(info);
const[times,setTimes]=useState([])

    let time = 0;
    for (const data of info) {
        time += parseInt(data.time);

    }

    const handleBreakTime=(value)=>{
        setTimes(...times,value)
    }
    console.log(times);

    return (
        <div>
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
                <button onClick={(e)=>handleBreakTime(e.target.innerText)}>1h</button>
                <button onClick={()=>handleBreakTime()}>2h</button>
                <button onClick={()=>handleBreakTime()}>3h</button>
                <button onClick={()=>handleBreakTime()}>4h</button>
            </div>

            <div className='details'>
                <h5>Exercise Details</h5>
                <div className='e-time'>
                    <small>Exercise time : {time} seconds</small>
                </div>
                <div className='b-time'>
                    <small>Break time : </small>
                </div>
            </div>

            <button className='activity-btn'>Activity Done</button>
        </div>
    );
};

export default Cart;