 
function App() {

  const names=[{id:1 ,name:'Dulmi',age:23},
              {id:2 ,name:'Pabasara',age:20},
              {id:3 ,name:'Yapa',age:22}];

  const cities=[{name:"Colombo"}, {name:"Gampaha" },{name:"Kandy"}]
  
  const classes=[{classId:1 ,name:'Maths',score:23},
                {classId:12 ,name:'Physics',score:100},
                {classId:5 ,name:'Cheminstry',score:66}
  ]
  
  return(
    
    <> 
    <h1>Hiiii</h1>
    
     {names.length > 0 ? <List list={names} heading="Name" ></List> : "Empty list" }
    
     <List list={cities} heading="City"></List>

     <Classes list={classes} level="Advanced Level"></Classes>
     <NewList list={names} topic="Students list"></NewList>
       
    </> 

  );
   
}
export default App
