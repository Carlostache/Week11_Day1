import React from 'react';
import { Game } from './game';
import ReactDOM from 'react-dom';



function Root() {
    return( 
    <div>
        <Game />
    </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("main");
    ReactDOM.render(<Game />, root);
});
