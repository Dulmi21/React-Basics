function UserGreetings(props){
    //We can use const welcome msgs
       
        //const welcomeMsg=  <h2>Welcome {props.username}</h2>
     
       if(props.isLoggedIn){
        return <h2>Welcome {props.username}</h2>
        

        }
        else{
            return <h2>Please log in</h2>


        }
   ///This is also the same
    //    return(
    //      props.isLoggedIn ? "Welcome":"Please log In"
    //    );

     

}

UserGreetings.defaultProps={
    username: "Unknown User",
    isLoggedIn: false
}

export default UserGreetings