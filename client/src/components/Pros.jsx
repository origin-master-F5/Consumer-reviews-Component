import React from 'react';


const Pros = (props) => (
    <div className="compare-list">
        <div className="pros-cons-title">Pros mentioned</div>
        <ul>
            {props.filters.map((word, index) => (
                <li key={index}>
                    <button className="filter-word-btn">{word[0]} ({word[1]})</button>
                </li>
            ))}

        </ul>
    </div>
);

export default Pros