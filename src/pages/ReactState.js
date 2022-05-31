import * as React from "react";
import {Link} from "react-router-dom";


class ReactState extends React.Component {
    num

    constructor(props) {
        super(props);
        this.num=props.number;
        console.log('constructor', this.num)
    }

    increase() {
        this.num++;
        console.log('increase num',this.num)
    }

    render() {
        console.log('render num', this.num)
        return <div>
            <button><Link to="/">Table of contents</Link></button>
            <div className="wrap">
                <h1>React State</h1>
                <p>{this.num}</p>
                {/*
                The method this.increase loses external context (this) if used as an argument
                That's why we should explicitly point the method to its context.
                */}
                <button onClick={this.increase.bind(this)}>Increase</button>
            </div>
        </div>
    }

}

export default ReactState