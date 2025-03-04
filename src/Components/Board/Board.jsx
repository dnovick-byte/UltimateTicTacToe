import { React, useState, useEffect } from 'react';
import Square from '../Square/Square';
import "./Board.css";
import lion from '../../Assets/lion.png';
import tiger from '../../Assets/tiger.png';

function Board({ index, onWin, shouldReset, turn, flipTurn, screenShot }) {

    function checkWinner(squares) { // takes grid array of 9 elements, returns winner if there is a winner for tictactoe, null otherwise
        for (const[a,b,c] of winners) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }


    const handleClick = (sq) => {
        console.log(turn);
        if (squares[sq] || winner) return; // ignore click if filled or board already won
        const newSquares = [...squares];
        newSquares[sq] = (turn === 'X') ? 'X': 'O';
        setSquares(newSquares);

        if (checkWinner(newSquares)) {
            setWinner(newSquares[sq]);
            onWin(index, newSquares[sq]);
        }
        flipTurn();
    }

    const winners = [
        [0,1,2],[3,4,5],[6,7,8], // Rows
        [0,3,6],[1,4,7],[2,5,8], // Columns
        [0,4,8],[2,4,6]          // Diagonals
    ];


    const[squares, setSquares] = useState(Array(9).fill(null)); // array that holds values pertaining to board grid
    const[winner, setWinner] = useState(null); // winner holds null until/unless there is a winner of the tictactoe board


    useEffect(() => {
        if (shouldReset > 0) {
            setSquares(Array(9).fill(null));
            setWinner(null);
        }
    }, [shouldReset]);
    
    /*return (
        <div className="grid-item">
            { winner ? (
                <div className="winner">
                    {<img src={winner === 'X' ? lion : tiger} alt="winner"/> }
                </div> 
            ) : (
                <div className="mini-board">
                    {squares.map((value, index) => (
                        <Square
                            key={index} 
                            value={value} 
                            onClick={() => handleClick(index)} 
                        />
                    ))} 
                </div>
            )}
        </div>
    );*/


    return (
        <div className="grid-item">
      {/*      {screenShot && (
                <div className={`mini-board.faded"}`}>
                    {squares.map((value, index) => (
                        <Square
                            key={index} 
                            value={value} 
                            onClick={() => handleClick(index)} 
                        />
                    ))} 
                </div>               
            )} */}

            <div className="grid-item">
                
{/* start */}

    {screenShot ? (
            <div>
                <div className="mini-board faded">
                    {squares.map((value, index) => (
                        <Square
                            key={index} 
                            value={value} 
                            onClick={() => handleClick(index)} 
                        />
                    ))} 
                </div>
                {winner &&   
                    <div className="winner-overlay-ss">
                        <img src={winner === 'X' ? lion : tiger} alt="winner" className="winner-image"/>
                    </div>
                }
            </div>
            
        ) : (
                <div className="mini-board">
                    {squares.map((value, index) => (
                        <Square
                            key={index} 
                            value={value} 
                            onClick={() => handleClick(index)} 
                        />
                    ))} 
                </div>

    )}
    {winner &&   
        <div className="winner-overlay">
            <img src={winner === 'X' ? lion : tiger} alt="winner" className="winner-image"/>
        </div>
    }
    {/* stop */}


        



        


                

          
        

            </div>
    </div>

    )
}

export default Board;