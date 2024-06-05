import React from 'react'
import { slots } from '../data'
import RadioComponent from './RadioComponent'
import '../Css/TimeSchedule.css'
import BsContext from "../Context/BsContext";
import { useContext } from 'react';


const TimeShedule=()=> {
  const context = useContext(BsContext);

  // Getting time and change changeTime components from the context.
  const { time, changeTime } = context;

  const handleChangeTime = (value) => {
    changeTime(value);

    //setting slot in localstorage
    window.localStorage.setItem("slot", value);
  };
  return (
    <>
    <div className='Slot_container'>
      <h1 className='TS_heading'>Select a Schedule</h1>
      <div className="TS_main_container">
            {slots.map((el,index)=>{
                return(
                    <RadioComponent text={el} key={index} changeSelection={handleChangeTime}
                    data={time}/>
                )
            })}
      </div>
      
    </div>
    </>
  )
}

export default TimeShedule
