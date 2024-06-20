// import styles from './Button.module.css'

// Style react components with CSS
// 1.External
// 2.Modules
// 3.Inline

function Button(){

    // remove import file and add styles here
    //This is called inline css styling
    const styles={
    width: "200px",
    height: "100px",
    backgroundColor: "aqua",
    fontSize: "20px",
    border:"none",
    borderRadius: "20px",
    cursor: "pointer",

    }

    return (
        //no need to name the button, here we add the style
        <button style={styles}>
            Click me
             
        </button>
    );

}

export default Button