import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Component } from 'react'

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        console.log("Start");
    }
    componentDidUpdate() {
        console.log("Update");
    }
    Increment(){
        
    }

    render() {
        return (
            <div align="center">
                <h1>Counter App</h1>
                <h2>Count : { }</h2>
                <button onClick={() => Increment()}>Plus</button>
            </div>
        )
    }
}

export default Counter