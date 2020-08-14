import React from 'react';

const WrongLetters = ({wrongLetters}) => {
    return (
        <div className="wrong-letters-container">
            <div>
                {wrongLetters.length>0 && <p>Wrong Letters</p>}
                {wrongLetters
                    .map((wrongLetter,index)=> <span key={index}>{wrongLetter}</span>)
                    .reduce((prev,curr)=>prev===null ? [curr]: [prev,',',curr],null)  // basically makes above spans seperated by commas
                }
            </div>
        </div>
    );
};

export default WrongLetters;