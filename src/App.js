import './App.css';
import * as React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import SquarePage from "./pages/SquarePage";
import HomePage from "./pages/HomePage";
import ReactState from "./pages/ReactState";

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/square" element={<SquarePage/>}/>
            <Route path="/todo" element={<TodoPage/>}/>
            <Route path="/react" element={<ReactState/>}/>
        </Routes>
    </BrowserRouter>
}

export default App;
