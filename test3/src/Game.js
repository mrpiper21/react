import { useState } from "react"
import Board from "./Board"

const Game = () => {
    const [xIsNext, setXIsnext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentsquares = history[history.length - 1];

    const handlePlay = (nextSquares) => {

    }

  return (
    <div>
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div>
        <ol>{}</ol>
      </div>
    </div>
  )
}

export default Game
