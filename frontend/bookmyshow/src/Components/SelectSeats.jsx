import React from 'react'
import {seats} from '../data.js'
import SeatInputs from './SeatInputs.jsx'
import { useContext } from 'react';
import { useState } from 'react';
import BsContext from '../Context/BsContext.jsx';
function SelectSeats() {
  const [seat, changeSeats] = useState([]);
  const context = useContext(BsContext);
  const { noOfSeat, changeNoOfSeats } = context;
  return (
    <div className='SS_wrapper'>
      <h1 className='SS_heading'>Select Seats : </h1>
      <div className="SS_main_container">
        {seats.map((el,index)=>{
          return(
            <SeatInputs seat={seat} index={index}
            key={index} text={el} changeSeats={changeSeats}
            noOfSeat={noOfSeat}
       
            changeNoOfSeats={changeNoOfSeats}/>
          )
        })}
      </div>
    </div>
  )
}

export default SelectSeats
