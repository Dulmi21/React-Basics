
function Movies(prop){
    return(
        <div className="MovieBox">
            <img href={prop.link} alt="No photo found"></img>
            <p className="title">{prop.name}</p>
            <p className="text">{prop.text}</p>


        </div>

    );

}

export default Movies