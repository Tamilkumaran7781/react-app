import React from "react";
function TestComp(props){
    return(
        <div>
            <h1>This is {props.name}</h1>
        </div>
    );
}
export default TestComp;
//const fC= ReactDOM.createRoot(document.getElementById('root'))
//fC.render(
//    <TestComp/>
//)