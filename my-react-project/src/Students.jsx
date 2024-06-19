
//props can have boolean values too. Defined as true-> Yes, if not then No

//This function accepts props

 
function Students(props){

    return(
        <div className="students">
            <p>    Name: {props.name}</p>
            <p>   Age: {props.age}</p>
            
            <p>
                Student :{props.isStudent ? "Yes" : "No"}
                {/*     If this is true-> Do this,   else do this */}
            </p>
        </div>

    );
}

Students.propTypes={
    name: PropType.string,
    age: PropType.number,
    isStudent: PropType.boolean


}

export default Students