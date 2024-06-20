
//props can have boolean values too. Defined as true-> Do something, if not then Do another thing

//This function accepts props

//defaultProps = default values for props in case they are not passed from 
//               the parent component

import PropTypes from 'prop-types'
 
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

Students.PropTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.boolean


}

Students.defaultProps={
    name: "Guest",
    age: 23,
    isStudent: false
}


export default Students