import React, { Fragment, useState,useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Notification from "./components/Notification";
import words from "random-words";
import { displayNotification } from "./helpers/helpers";

var selectedWord= words({minLength:5, maxLength:12,exactly:1}).join();

const App = () => {
    
    const [playable,setPlayable]= useState(true);
    const [correctLetters,setCorrectLetters]= useState([]);
    const [wrongLetters,setWrongLetters]= useState([]);
    const [showNotification,setShowNotification]= useState(false);

    const playAgain= ()=>{
        // Reset States to initial value
        setPlayable(true);
        setCorrectLetters([]);
        setWrongLetters([]);
        setShowNotification(false);
        selectedWord = words({ minLength: 5, maxLength: 12, exactly: 1 }).join();
    }

    useEffect(() => {
        const handleKeyDown = e =>{
            const {key,keyCode} = e;
            var letter='';  
            if(playable){
                if (keyCode >= 97 && keyCode <= 122) letter = key;
                else if (keyCode >= 65 && keyCode <= 90)
                    letter = key.toLowerCase();
                else return;
                if (selectedWord.includes(letter)) {
                    if (!correctLetters.includes(letter)) {                 // if typed letter not previously typed
                        setCorrectLetters((correctLetters) => [ ...correctLetters, letter,]);
                    } else {
                        displayNotification(setShowNotification);
                    }
                } else {
                    if (!wrongLetters.includes(letter)) {
                        setWrongLetters((wrongLetters) => [...wrongLetters,letter,]);
                    } else {
                        displayNotification(setShowNotification);
                    }
                }

            }
        }
        window.addEventListener('keydown', handleKeyDown);

        // whenever useEffect runs previous again previous listener is removed so that we don't have multiple same listeners everytime state changes
        return () => window.removeEventListener('keydown',handleKeyDown);  

    }, [correctLetters,wrongLetters,playable]);

    return (
        <Fragment>
            <Header />
            <div className="game-container">
                <Figure wrongLetters={wrongLetters} />
                <WrongLetters  wrongLetters={wrongLetters} />
                <Word selectedWord={selectedWord} correctLetters={correctLetters} />
            </div>
            <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
            <Notification showNotification={showNotification}/>
        </Fragment>
    );
};

export default App;
