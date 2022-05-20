import {Link} from "react-router-dom";
import * as React from "react";

function HomePage() {
    return <div>
        <ul>
            <li>
                <Link to="/square">Squares</Link>
            </li>
            <li>
                <Link to="/todo">TODO list</Link>
            </li>
        </ul>
        <hr/>
    </div>
}

export default HomePage
