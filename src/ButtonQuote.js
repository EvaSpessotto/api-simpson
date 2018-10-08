import React, { Component } from 'react';

const ButtonQuote = ({ selectQuote }) => {
    return (
        <div>
            <button onClick={selectQuote} >Change citation</button>
        </div>
    );
}

export default ButtonQuote;