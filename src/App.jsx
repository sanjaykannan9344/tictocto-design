import "./App.css";
import Board from "./components/Board";
function App() {
  return (
    <div className="flex items-center justify-center bg-sky-100">
      <div className="text-center">
        <h1 className="text-blue-300 text-6xl my-6 italic hover:text-blue-400">
          Tic~Tac~Toe
        </h1>
        <br />
        <Board />
        <br />
        <br />
      </div>
    </div>
  );
}
export default App;
