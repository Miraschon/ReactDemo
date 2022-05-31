import * as React from "react";
import {Link} from "react-router-dom";


class ReactState extends React.Component {
    num

    constructor(props) {
        super(props);
        this.num=props.number;
    }

    increase(){
        console.log('num=', this.num)
        this.num++;
    }

    render() {
        console.log('num=', this.num)
        return <div>
            <button><Link to="/">Table of contents</Link></button>
            <div className="wrap">
                <h1>React State</h1>
                <p>{this.num}</p>

                <button onClick={this.increase}>Increase</button>
            </div>
        </div>
    }

}

export default ReactState