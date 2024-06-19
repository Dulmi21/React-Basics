import picture from "./assets/react.svg"
function Card(){

    return(
        <div className="card">
            <img className="Card-image" src={picture} alt="svg not found"></img>
            <h2 className="Card-title">
                Dulmi Yapa

            </h2>
            <p className="Card-text">University of Moratuwa

            </p>
        </div>
    );

}

export default Card