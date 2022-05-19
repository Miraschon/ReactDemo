import './App.css';
import Square from "./components/square/Square";


function random(n) {
    return Math.floor(Math.random() * n) + 1;
}

function randomColor() {
  const colors = ['red','green','blue','magenta', 'cyan']
  return colors[random(5) - 1];
}


function App() {
  const color = randomColor();

  return (
    <div className="App">
        <table id="simple-board">
            <tbody>
            <tr id="row1">
                <td>
                <Square/>
                </td>
                <td>
                <Square/>
                </td>
            </tr>
            <tr id="row2">
                <td>
                <Square color={randomColor()} />
                </td>
                    <td>
                <Square color={color}/>
                    </td>
            </tr>

            </tbody>
        </table>

    </div>
  );
}

export default App;
