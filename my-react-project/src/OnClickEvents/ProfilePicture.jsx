 import picture from "./react.svg"

function ProfilePicture(){
    const imageUrl= '././assets/react.svg';
    

    const handler =(e) => e.target.style.display = "none";
    return (
        <img src={picture} onClick={(e) =>handler(e)}></img>
    );



}
 

export default ProfilePicture