//This function takes class arrays , sort them, and print filtered elements
function Classes(props){


    // elements.sort((a,b) => a.score-b.score)
    const theList=props.list.filter(element => element.score>50);

     const elements=theList.map(element => <li>{element.name} : {element.score}</li>);

    return(
        <>
        <h2>{props.level}</h2>
        
        <ul>{elements}</ul>
       
        
        </>
    );



}

Classes.defaultProps={
    list: [],
    level:"No title given"
}

export default Classes