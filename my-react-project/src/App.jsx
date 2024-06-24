 
//import Button from "./Styles/Button.jsx";
import Students from "./Props/Students.jsx";
import Card from "./Card.jsx";
import Button from "./OnClickEvents/Button.jsx"
import ProfilePicture from "./OnClickEvents/ProfilePicture.jsx";

import UserGreetings from "./ConditionalRendering/UserGreetings.jsx";
import List from "./RenderingLists/List.jsx"
import Classes from "./RenderingLists/Classes.jsx"

import NewList from "./RenderingLists/NewList.jsx";
import ColourPicker from "./onChangeEventHandler/ColourPicker.jsx";

//import MyComponent from "./UseState()/MyComponent.jsx";
import Counter from "./UseState()/Counter.jsx";
import MyComponent from "./Updater/new3.jsx";
//import MyComponent from "./onChangeEventHandler/MyComponent.jsx";

function App() {
   
   
  return(
    
    <> 
    
   <ColourPicker></ColourPicker>

   <MyComponent/>
    </> 

  );
   
}
export default App
