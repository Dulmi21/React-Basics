// Conditional rendering-
// Allows you to control what gets redered in your application 
// based on certain conditions
// (show, hide, or change components)

function UserGreeting(props){
    return(
        <div>
            <p>Name: {props.name}  </p>
        <p> {props.isLogged ? "User is logged in ": "User not logged in"}</p>


        </div>
            );


}

UserGreetings.defaultProps={
    name: "Guest",
    isLogged: false
}

export default UserGreetings