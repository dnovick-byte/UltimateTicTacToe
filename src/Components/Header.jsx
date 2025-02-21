import React from 'react';
import "./styles.css";
import lion from '../Assets/lion.png';
import tiger from '../Assets/tiger.png';


function Header () {
    return (
        <div className="header">
            <img src={lion} alt="lion"/>
                <h1 className="title">
                    Tic-Tac-Toe
                </h1>
            <img src={tiger} alt="tiger"/>
        </div>
    );
};

export default Header;