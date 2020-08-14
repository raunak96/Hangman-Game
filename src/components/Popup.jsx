import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable,playAgain}) => {

    let finalMessage='',correctWord='',playable=true;
    const status= checkWin(correctLetters, wrongLetters, selectedWord);

    if (status === "win") {
        finalMessage = "Congratulations! You won! 😃";
        playable = false;
    } else if (status=== "lose") {
        finalMessage = "Unfortunately you lost. 😕";
        correctWord = `...the word was: ${selectedWord}`;
        playable = false;
    }
    useEffect(()=>{
        setPlayable(playable);
    });

    return (
        <div className="popup-container" id="popup-container" style={status!=='' ? {display:'flex'}:{}}>
            <div className="popup">
                <h2>{finalMessage}</h2>
                <h3>{correctWord}</h3>
                <button onClick={playAgain}>Play Again</button>
            </div>
        </div>
    );
};

export default Popup;