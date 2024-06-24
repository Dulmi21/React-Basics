// Click events =An interaction when a user clicks on a specific Element
// .We can reponnd to clock events by passing a callback to the onClick event handler

function Button(){


    let count =0;
    //no parameters
    const handleClick = () => {
        
        count++;
        console.log("Clicked");
        console.log(count);
        return(
            <h2>Hi</h2>
        );
    
    }
   


    //with parameters
    const handleClick2= (name) =>console.log({name});


    const text="hey";
    // const handleClick3 = (e) => console.log(e);;

    const handleClick3 = (e) => e.target.textContent ="CLICKED";
 
    
    return(
        <>
           <button className="newButton" onClick={handleClick}>Click Me</button>

           <h3>Current count : {count}</h3>
            <h1></h1>
           <button className="newButton" onClick={() =>handleClick2("Dulmi")}></button>

           <button className='newButton' onDoubleClick={(e) =>handleClick3(e)}>Hi</button>
        
        </>
      );


}

export default Button