import * as React from "react";
import {Link} from "react-router-dom";

class ReactStateClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            num1: this.props.number,
            num2: 2
        }
        console.log('constructor', this.state.num)
    }

    increase1() {
        this.setState({ num1: this.state.num1+1 }, () => {
            console.log('increase num',this.state.num1)
        })
    }


    increase2() {
        this.setState({ num2: this.state.num2+1 }, () => {
            console.log('increase num',this.state.num2)
        })
    }

    render() {
        console.log('render num', this.state.num1)
        return <div>
            <button className={'table'}><Link to="/">Table of contents</Link></button>
            <div className="wrap">
                <h1>React State Class</h1>
                <p>{this.state.num1}</p>
                <p>{this.state.num2}</p>
                {/*
                The method this.increase loses external context (this) if used as an argument
                That's why we should explicitly point the method to its context.
                */}
                <button onClick={this.increase1.bind(this)}>Increase num1</button>
                <button onClick={this.increase2.bind(this)}>Increase num2</button>
            </div>
        </div>
    }

}

export default ReactStateClass