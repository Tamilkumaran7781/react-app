import React from "react";
import "../../css/PropsComponent.css"
function TestComp(props){
    const StyleAttr = {
        color: "red", 
        backgroundColor:"yellow"
    }
    return(
        <div style={StyleAttr}>
            <h1>This is {props.name}</h1>
        </div>
    );
}
export default TestComp;
//const fC= ReactDOM.createRoot(document.getElementById('root'))
//fC.render(
//    <TestComp/>