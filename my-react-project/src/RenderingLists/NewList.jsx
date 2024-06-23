//Take a list of students and filter it


function NewList(props){

   // props.list.sort((a,b) => a.age - b.age );

    const list2= props.list

   // const filteredList= list2.filter(element => element.age > 20 )
    const children = props.list.map(child => <li>{child.name} : {child.age}</li>);

    //const filteredList = children.filter(element => element.age > 20)

    return(
        <div>
            <h2>{props.topic}</h2>

            <ol>{children}</ol>
            


            {/* <p>{props.list}</p> */}

            <h1>hii000</h1>
        </div>
       
    );



}

NewList.defaultProps={
    list: [],
    topic: "unknown"

}

export default NewList