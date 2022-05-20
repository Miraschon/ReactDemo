import Square from "../components/square/Square";
import {useState} from "react";
const colors = ['red','green','blue','cyan']
function SquarePage() {
const [counter,setCounter]=useState(0);
function rotate(){
        let temp= colors[0];
        for(let i=0; i<colors.length; i++){
            if(i<colors.length-1){
                colors[i]=colors[i+1]
            }else if(i===colors.length-1){
                colors[i]=temp;
            }
        }
        setCounter(counter+1)
        console.log('colors ', colors[0], colors[1], colors[2], colors[3])
    }
    return (
        <div className="App">
            <table id="simple-board">
                <tbody>
                <tr id="row1">
                    <td>
                        <Square color={colors[3]}/>
                    </td>
                    <td>
                        <Square color={colors[2]}/>
                    </td>
                </tr>
                <tr id="row2">
                    <td>
                        <Square color={colors[0]}/>
                    </td>
                    <td>
                        <Square color={colors[1]}/>
                    </td>
                </tr>
                </tbody>

            </table>
            <button onClick={rotate}>Rotate</button>
        </div>
    );
}

export default SquarePage;