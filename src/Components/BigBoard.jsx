import { React, useState, useEffect } from 'react';
import './styles.css';
import Board from './Board';
import lion from '../Assets/lion.png';
import tiger from '../Assets/tiger.png';

function BigBoard() {

    function reset() {
        setBoards(Array(9).fill(null));
        setWinner(null);
        setResetTrigger(prev => prev + 1);
        setTurn(Math.random() < 0.5);
    }

    function checkWinner(boards) {
        for (const[a,b,c] of winners) {
            if (boards[a] && boards[a] === boards[b] && boards[a] === boards[c]) {
                return boards[a];
            }
        }
        return null;
    }

    function flipTurn() {
        setTurn((turn === 'X'?'O':'X'));
    }


    const handleBoard = (index, winner) => {
        const newBoards = [...boards];
        newBoards[index] = winner;
        setBoards(newBoards);

        if (checkWinner(newBoards)) { // checks if there is a winner on the big board
            setWinner(winner);
        }    
    };



    const winners = [
        [0,1,2],[3,4,5],[6,7,8], // Rows
        [0,3,6],[1,4,7],[2,5,8], // Columns
        [0,4,8],[2,4,6]          // Diagonals
    ];

    const[boards, setBoards] = useState(Array(9).fill(null));
    const[winner, setWinner] = useState(null); // winner is null until/unless there is a winner of the ultimate tic-tac-toe, in which case, winner will be the value of the winner (X or O)
    const[resetTrigger, setResetTrigger] = useState(0);
    const[turn, setTurn] = useState((Math.random() < 0.5) ? 'X': 'O');


    return (
        <div className="big-board-container">
            {winner && (
                <div className="overlay">
                    <div className="overlay-content">
                        <h2> 
                            Winner:
                        </h2>
                        <img src={(winner === 'X'? lion: tiger)} alt= {(winner === 'X'? 'Lion': 'Tiger')} /> 

                        <button onClick={reset}>Play Again</button>
                    </div>
                </div>
            )}


            {boards.map((board, index) => ( //board: each individual item in the bigBoard array, index: The index of the current element in the bigBoard array
                <div> 
                    <Board 
                        index={index}
                        onWin={handleBoard}
                        shouldReset={resetTrigger}
                        turn={turn}
                        flipTurn={flipTurn}
                    />
                </div>
            ))}
        </div>

    );

};

export default BigBoard;