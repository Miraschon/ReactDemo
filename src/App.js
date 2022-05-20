import './App.css';
import * as React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import SquarePage from "./pages/SquarePage";
import HomePage from "./pages/HomePage";

function App() {
    return <BrowserRouter>
        <HomePage/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="square" element={<SquarePage/>}/>
            <Route path="todo" element={<TodoPage/>}/>
        </Routes>
    </BrowserRouter>
}

export default App;
