
import React, {useState} from 'react'



function Counter(){

    let [count, setCount]= useState(0);

    const increaseCount= () =>{
        setCount(count+1);
    }

    const decreaseCount= ()=> {
        setCount(count-1);
    }

    const resetCount= ()=> {
        setCount(0);
    }

    return(
        <div className='container'>
            <h1 className="number">
                  {count}
            </h1>
            <button className="button" onClick={increaseCount}>
                Increase
            </button>

            <button className="button" onClick={decreaseCount}>
                Decrease
            </button>

            <button className="button" onClick={resetCount}>
                Reset
            </button>

            
        </div>
    );




}

export default Counter