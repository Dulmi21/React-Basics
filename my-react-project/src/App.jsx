 
import Button from "./Styles/Button.jsx";
import Students from "./Props/Students.jsx";
import Card from "./Card.jsx";

import UserGreetings from "./ConditionalRendering/UserGreetings.jsx";
import List from "./RenderingLists/List.jsx"

function App() {

  const names=[{id:1 ,name:'Dulmi',age:23},
              {id:2 ,name:'Pabasara',age:20},
              {id:3 ,name:'Yapa',age:22}];

  const cities=[{name:"Colombo"}, {name:"Gampaha" },{name:"Kandy"}]
  return(
    
    <> 
    {/* Use conditional rendering to render our lists  */}
      
      
     {/* if(names.length > 0){

     } */}
     {names.length > 0 ? <List list={names} heading="Name" ></List> : "Empty list" }
    
     <List list={cities} heading="City"></List>
       
    </> 

  );
   
}
export default App
