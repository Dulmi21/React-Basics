import PropTypes from 'prop-types'
function Movies(prop){
    return(
        <div className="MovieBox">
            {/* <img href={prop.link} alt="No photo found"></img> */}
            <p className="title">{prop.name}</p>
            <p className="text">{prop.text}</p>


        </div>

    );

}

Movies.PropTypes={
    name: PropTypes.string,
    text: PropTypes.text

}

export default Movies