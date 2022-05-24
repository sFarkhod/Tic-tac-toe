import React, { useState } from 'react'
import './Tic_Tac_Toe.css'

const Tic_Tac_Toe = () => {

    const [turn, setTurn] = useState('x');
    const [color, setColor] = useState();
    const [background, setBackground] = useState();
    // let color;
    // let color2;
    // qaysi itemning klik bolganini tekshirish uchun yangi 9 qatorli array yaratamiz. va odatiy holda bosh stringga teтglashtiramiz.
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState();


    // g'olibni aniqlash
    const WinningSystem = (squares) => {
        let winningLine = {
            xLine: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            yLine: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6],
            ],
        }

        for (let winLine in winningLine) {
            winningLine[winLine].forEach((element) => {
                if (
                    squares[element[0]] === '' ||
                    squares[element[1]] === '' ||
                    squares[element[2]] === '') {
                    // just nothing
                }
                else if (squares[element[0]] === squares[element[1]] && squares[element[1]] === squares[element[2]]) {
                    setWinner(squares[element[0]])
                    // setBackground('backColor')
                }
            });
        }
    }

    // clicklarni tekshirish uchun
    const handleClick = (tic) => {
        if (cells[tic] !== '') {
            alert('already clicked')
            return;
        }

        // arrayimizni square arrayi ichiga olib olamiz
        let squares = [...cells];

        if (turn === 'x') {
            squares[tic] = 'x'
            setTurn('o')
        }
        else {
            squares[tic] = 'o'
            setTurn('x')
        }

        WinningSystem(squares);
        setCells(squares);
    }

    const restartGame = () => {
        setWinner(null);
        setCells(Array(9).fill(''));
    }


    // kartani render qilsihimiz uchun
    const Cell = ({ tic }) => {
        turn === 'x' ? setColor('blackStyle') : setColor('yellowStyle');    
        return <td className='column' onClick={() => handleClick(tic)}><h1 className={color}>{cells[tic]}</h1></td>
    }




    return (
        <div className='container'>
            <table>
                {/* Turn: {turn} */}
                <tbody>
                    {/* qaysi button bosilganini tekshirish uchun propsdan foydalanamiz */}
                    <tr>
                        <Cell tic={0} />
                        <Cell tic={1} />
                        <Cell tic={2} />
                    </tr>
                    <tr>
                        <Cell tic={3} />
                        <Cell tic={4} />
                        <Cell tic={5} />
                    </tr>
                    <tr>
                        <Cell tic={6} />
                        <Cell tic={7} />
                        <Cell tic={8} />
                    </tr>
                </tbody>
                {winner && (
                    <>
                        <p>{winner} is the winner</p>
                        <button onClick={() => restartGame()}>Play again</button>
                    </>
                )}
            </table>
        </div>
    )
}

export default Tic_Tac_Toe