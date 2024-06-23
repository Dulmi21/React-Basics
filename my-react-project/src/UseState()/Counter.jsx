
import React, {useState} from 'react'



function Counter(){

    let [count, setCount]= useState(0);

    const increaseCount= () =>{
        setCount(count+1);
    }

    const decreaseCount= ()=> {
        setCount(count-1);
    }


    return(
        <div>
            <h1 className="number">
                  {count}
            </h1>
            <button className="button" onClick={increaseCount}>
                Increase
            </button>

            <button onClick={decreaseCount}>
                Decrease
            </button>

            
        </div>
    );




}

export default Counter