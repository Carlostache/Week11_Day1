import React from 'react';
import { Board, Tile } from '../minesweeper.js'

export class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            board: new Board(3, 0),
        }


        this.render = this.render.bind(this);
        this.updateGame = this.updateGame.bind(this);
    }


    updateGame() {
        
    }

    render () {
        return (      
            <div key="wrapper">
                <ul>
                {this.state.board.grid.map((row, idx1) => {
                    return (
                        row.map((tile, idx2) => {
                       return <li>hello</li>
                    }))
                } )}
                </ul>
            </div>
        ) 
    }
}