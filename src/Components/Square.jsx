import React from 'react';
import "./styles.css";
import lion from '../Assets/lion.png';
import tiger from '../Assets/tiger.png';


function Square ({ value, onClick }) {
    let val = (value === 'X') ? lion : tiger;
    return (
        <button className="square" onClick={onClick}>
            {value && <img src={val} alt={value} />}
        </button>
    ); 
}

export default Square;
