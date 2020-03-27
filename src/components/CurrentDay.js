import React from 'react';
import Sunrise from '../assets/Sunrise.svg';
import Sunset from '../assets/Sunset.svg';

function CurrentDay(props) {

    return (
        <div className='text-center fancy-font'>
            <h1 className='day'>Day {props.day}</h1>
            <p>{props.timeLeft} hours left</p>
            <div className='flex justify-around'>
                <div>
                    <img src={Sunrise} />
                    <p>Sehri</p>
                    <p>{props.sehri}</p>
                </div>
                <div>
                    <img src={Sunset} />
                    <p>Iftaar</p>
                    <p>{props.iftaar}</p>
                </div>
            </div>
        </div>
    )
}

export default CurrentDay;
