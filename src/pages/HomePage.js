import {Link} from "react-router-dom";
import * as React from "react";
import './HomePage.css';

function HomePage() {
    return <div className="wrap">
        <h1>React Demo</h1>
        <Link to="/square">
            <div className="squares">Squares</div>
        </Link>
        <Link to="/todo">
            <div className="list">TODO list</div>
        </Link>
        <Link to="/react">
            <div className="list">React State</div>
        </Link>
    </div>
}

export default HomePage
