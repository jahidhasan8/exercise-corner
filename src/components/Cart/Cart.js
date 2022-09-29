

import React, { useEffect, useState } from 'react';

import './Cart.css'


const Cart = ({ info }) => {
    //  console.log(info);
    const [breakTime, setBreakTime] = useState(localStorage.getItem('breakTime') ? localStorage.getItem('breakTime') : 0);

    useEffect(() => {
        localStorage.setItem('breakTime', breakTime);
        setBreakTime(localStorage.getItem('breakTime'))

    }, [breakTime])

    let time = 0;
    for (const data of info) {
        time += parseInt(data.time);

    }


    return (
        <div className='cart'>
            <div>
                <img className='p-image' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
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
                <button onClick={() => setBreakTime(1)}>1h</button>
                <button onClick={() => setBreakTime(2)}>2h</button>
                <button onClick={() => setBreakTime(3)}>3h</button>
                <button onClick={() => setBreakTime(4)}>4h</button>
            </div>

            <div className='details'>
                <h5>Exercise Details</h5>
                <div className='e-time'>
                    <small>Exercise time : {time} hour</small>
                </div>
                <div className='b-time'>
                    <small>Break time : {breakTime} hour</small>
                </div>
            </div>

            <button className='activity-btn'>Activity Done</button>
        </div>
    );
};

export default Cart;