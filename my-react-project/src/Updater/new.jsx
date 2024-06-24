/*
Updater function- A function passed as an argument to setState() 
usualy 
ex: setYear(year+1)

better practice is to pass an updater function

setYear(updater function)

Allow for safe updates based on the previous state
Used with multiple state updates and asynchronous 
functions
Good practice to use updater function
*/

import React, {useState} from 'react'

function MyComponent() {

    const [count, setCount] = useState(0);

    const Increase = () =>{

        /*
        Uses the current state to calculate the NEXT state
        set function do not trigger an update

         */
        setCount(c => c+1)
        

        //count variable is updated here
    };


    //Correct method
    const Decrease = () =>{
        // setCount(count => count-1);
        // setCount(count => count-1);
        // setCount(count => count-1);

        //Can use c OR preCount insted of count
        setCount(c  => c -1);
        setCount(c => c -1);
        setCount(c  => c -1);

        /**
         * Takes the PENDING state to calculate NEXT state
         * React puts your updater function in a queue
         * During the next render , it will call them in the same order 
         */
    };



    return (

        <div>
            <div>Count : {count}</div>
            {/* <button  onClick={() => {setCount(count+1)}}>Increase</button> */}
            <button onClick={Increase}>Increase</button>
            <button onClick={Decrease}>Decrease</button>
            <button onClick={() =>{setCount(0)}}>Reset</button>
        </div>
    );
     

}

export default MyComponent