import React from 'react';
import "./Header.css";
import lion from '../../Assets/lion.png';
import tiger from '../../Assets/tiger.png';


function Header () {
    return (
        <div className="header">
            <img src={lion} alt="lion"/>
            
                <div className="title">
                    <h1>
                        Ultimate
                    </h1>
                    <h1>
                        Tic-Tac-Toe
                    </h1>
                </div>
            <img src={tiger} alt="tiger"/>
        </div>
    );
};

export default Header;