import './App.css';
import * as React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import SquarePage from "./pages/SquarePage";
import HomePage from "./pages/HomePage";
import ReactStateClass from "./pages/ReactStateClass";
import ReactStateFunc from "./pages/ReactStateFunc";

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/square" element={<SquarePage/>}/>
            <Route path="/todo" element={<TodoPage/>}/>
            <Route path="/react" element={<ReactStateClass number={0}/>}/>
            <Route path="/reactfunc" element={<ReactStateFunc number={0}/>}/>
        </Routes>
    </BrowserRouter>
}

export default App;
