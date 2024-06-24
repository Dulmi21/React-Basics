//update OBJECTS in state

import React, {useState} from 'react'

function MyComponent(){
    const [car, setCar]= useState({year:2000, model:"A8", make: "Audi"});

    function changeYear(event){
      //  setCar({year:event.target.value  , model:"A8", make: "Audi"});
        //Or use spread operator

        setCar(car => ({...car , year: event.target.value}))
        // here we have used the arrow function too, 
      //  setCar({...car , year: event.target.value})


    }
    return(
        <>
     
        <p>Car : {car.year} , {car.model} , {car.make}</p>

        {/* <button onClick={() => setCar({year:9000, model:"A8", make: "Audi"})} ></button> */}
        <p>Enter year:</p>
        <input value={car.year}   onChange={changeYear}></input>
        {/* Value is the initial value fo that element */}
        <p>Car : {car.year} , {car.model} , {car.make}</p>

        <p>{car.year}</p>


        </>
    );




}

export default MyComponent