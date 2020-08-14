import React, { Fragment } from 'react';

const Header = () => {
    return (
        <Fragment>
            <h1>Hangman</h1>
            <p style={{textAlign:'center',marginBottom:'50px'}}>Find the hidden word - Enter a Letter</p>
        </Fragment>
    );
};

export default Header;