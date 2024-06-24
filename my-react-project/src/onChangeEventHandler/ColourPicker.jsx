 import React, {useState} from 'react'

 function ColourPicker(){
    
    let [colour, setColour]=useState();


    function colourChangeHandler(event){
        setColour(event.target.value);
    }


    return(

        <div>
            <div class="colourBox" style={{backgroundColor:colour}}>
                <p>{colour}</p>
            </div>

            <p>Select a Colour</p>
            <input type="color" value={colour} onChange={colourChangeHandler}  ></input>             
            
                   
        </div>

    );


 }

 export default ColourPicker