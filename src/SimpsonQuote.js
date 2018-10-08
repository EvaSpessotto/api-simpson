import React, { Component } from 'react';

const SimpsonQuote = ({ quote }) => {
    return (
        <div>
            <div>
                <h1>{quote.character}</h1>
                <img src={quote.image}  alt={quote.character} />
                <p>{quote.quote} </p>
            </div>
            
        </div>
    );
};

export default SimpsonQuote;