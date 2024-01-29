import React,{Component} from "react";
class StateComponent extends Component{
    constructor(){
        super()
        this.state = {
            name:"SRIRAM",
            course:"MERN"
        }
    }
    changeState = () => {
        console.log("SRIRAM NAVANEETHA KRISHNAN") // Use state should be used
    }
    render(){
        return (
            <div>
                <h1>This is State Components</h1>
                <h2>This is {this.state.name} studying {this.state.course}</h2>
                <h3>I am Changing the state of the {this.state.name} to {this.changeState()}</h3>
                <button onMouseOver={this.changeState}>Click me to change the state</button>
            </div>
        )
    }
}
export default StateComponent;