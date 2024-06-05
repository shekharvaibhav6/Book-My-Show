import React from "react";
import {MovieList} from "../data.js";
import RadioComponent from "./RadioComponent";
import BsContext from "../Context/BsContext.jsx";
import '../Css/SelectMovie.css';
import { useContext } from "react";
const SelectMovie=()=>{
    const context = useContext(BsContext);

    // Getting movie and change movie components from the context.
    const { movie, changeMovie } = context;
  
    const handleChangeMovie = (value) => {
      changeMovie(value);
  
      //setting movie in localstorage
      window.localStorage.setItem("movie", value);
    };
    return(
        <>
        <h1 className="SM_heading">Select A Movie :- </h1>
        <div className="SM_main_container">
            {MovieList.map((el,index)=>{
                return(
                    <RadioComponent text={el} key={index} changeSelection={handleChangeMovie}
                    data={movie}/>
                )
            })}
        </div>
        </>
    )
}
export default SelectMovie;