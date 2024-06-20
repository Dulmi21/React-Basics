


function List(props){
   

      const fruitArray=['apple','orange','pineapple'];
      //If we return this, it will print these to a plane text. We 
        // need to convert this to an array of list elements

        const fruits=[{id:1 ,name:'apple',cal:95},
                      {id:2 ,name:'orange',cal:2},
                       {id:3 ,name:'banana',cal:345}];
        
           //This mimics the unique ids in a database
        
         //SORTING-----------------------------------  

      fruits.sort((a,b)=>a.name.localeCompare(b.name)) //To sort by the name property
      //Reverse alpahabetical order, switch a and b

      fruits.sort((a,b)=>a.cal-b.cal) //sort by calories accending 
      //to do in decending order, switch a and b 
       

      //FILTERING---To make it reusable with diffrenet lists------------------------------------


      //New array of fruits which has calories less than 100

      const lowCalfruits = fruits.filter(fruit => fruit.cal<100 )

      const highCalfruits = fruits.filter(fruit =>fruit.cal>100)


       const lowlistItems=lowCalfruits.map(fruit => <li key={fruit.id}>
                                    {fruit.name} :  {fruit.cal} Calories
                                    </li>)

        
        const highListItems =highCalfruits.map(fruit => <li key={fruit.id}>
                                       {fruit.name} : {fruit.cal} Calories

                                            </li>

                                                 );

         //Transform----------------------------------------------
         //************************ */
        const newList= props.list.map(item => <li>{item.name}</li>);
        

        //Convert every element in array to a list Item using map method
        // each element should have a unique name
        return(
            <div>
                {/* <p>Low Calory</p>
                 <ul>{lowlistItems}</ul>
                 <p>High Calory</p>
                 <ul>{highListItems}</ul> */}

                 <h2>{props.heading}</h2>

                 <ul>{newList}</ul>


            </div>
           
            // <div>
            //     <p>{props.Isnumber  ? listItems[1]:"No"}</p>

            //     <p> {listItems} </p>
            // </div>
         
        );
}
List.propTypes ={
    category: PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number},
                                           {name: PropTypes.string},
                                           {age: PropTypes.number}))
}

List.defaultProps={
    category: "No categoty",
    list: []
}

export default List