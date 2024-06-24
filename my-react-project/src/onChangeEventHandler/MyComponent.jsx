//onchange= event handler used primarily with form Element 
 //ex . , <input> ,<testare>, <select>, <radio>, <checkbox>
 // Triggers a function every time the value of the input changes


 import React, {useState} from 'react'

 function MyComponent(){
    const [name, setName]= useState("");
    const [age, setAge] = useState(10);

    const [gender, setGender] = useState("Select gender");

    const [payment, setPayment]= useState("Select an option");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleAgeChange(event){
        setAge(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleGenderChange(event){
        setGender(event.target.value);
    }




    return(
        <div>
            <input placeholder='ENTER PASSWORD'></input>

            <textarea placeholder='Enter address' rows={10}></textarea>

            <input value={name} onChange={handleNameChange} placeholder='Enter Name'></input>
            <input value={age} onChange={handleAgeChange} placeholder='Enter Age'></input>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="Select an option">Select an option</option>
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
                <option value="UPI">UPI</option>
            </select>

            <select value={gender} onChange={handleGenderChange}>
                <option>Select gender</option>
                <option>Male</option>
                <option>Female</option>

            </select>

             
            <input type="radio" name="gender" value="Male"  /> Male
            <input type="radio" name="gender" value="Female"  /> Female
           

            <br></br>

            <p> Payment : {payment}</p>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
        </div>
    )
 }

 export default MyComponent

