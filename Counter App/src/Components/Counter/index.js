import { Component } from "react";
import "./styles.css"

class Counter extends Component{
    state = {count : 0}
    onInc = () =>{
        this.setState((prevState) => ({count: prevState.count + 1}))
    }
    onDec =() =>{
        this.setState((prevState) => ({count: prevState.count - 1}))
    }

    render(){
        return(
            <div id="container">
                <div id="counterContainer">
                    <h1 className="heading">Counter Application</h1>
                    <h1 className="count">{this.state.count}</h1>
                    <div>
                        <button type="button" onClick={this.onDec}>Decrement</button>
                        <button type="button" onClick={this.onInc}>Increment</button>  
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter;