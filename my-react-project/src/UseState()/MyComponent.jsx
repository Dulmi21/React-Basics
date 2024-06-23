
//React hook- A special function that allows functional components
//    to use react features without writing class components
//  (useState, useEffect, useContext, useReducer..)


// useState() = A React hook that allows the creation of a
//  stateful variable AND a setter function to update its value
// in the virtual DOM

import React, {useState} from 'react';

function MyComponent(){

    let [name, setName] = useState('guest');
    //    [variable,setter function]
    //UseSate returns an array of 2 elements, a variable and a setter function

    const updateName = () =>{
        setName("hII");
    }

     
    let [count, setCount] =useState(0);
  
    const increaseCount = () =>{
        setCount(count +1);
    }
    
    const decreaseCount= () => {
        setCount(count -1);

    };
        
       
        // if (index==0){
        //     setCount(0);

        // }
        // else{
        //     setCount(200);

        // }
        // index++;

        return(

            <div>
                <p>
                    Name : {name}
    
                </p>
    
                <button onClick={updateName}> 
                    Set name from this               
                </button>
    
                <p>
                    Count:{count}
                   
                </p>
    
                <button onClick={increaseCount}> Increase</button>
                <button onClick={decreaseCount}> Decrease</button>
    
            </div>
        );

        
    }
   

    





export default MyComponent