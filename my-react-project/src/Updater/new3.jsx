//Update the state of an array

import Reaxt, {useState} from 'react'

function MyComponent(){

    const [food, setFood] = useState(["Apple", "Banana" , "Orange"]);

    //Add element

    function handleAddFood(){

        
    }

    


    //Remove element


 
    return(
        <>
        <p>{food[0]}</p>
        {/* <input onChange={changeFruit}></input> */}
        <button onClick={() => {setFood(food.push("new"))}}>Click Me</button>
        <p>{food[1]}</p>

       
        </>
    );

}

export default MyComponent