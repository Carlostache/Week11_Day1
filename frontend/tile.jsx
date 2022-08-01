import React from 'react';
import {Tile} from "../minesweeper"


export class TileReact extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            item: new Tile()
        }

        this.render = this.render.bind(this);
    }

    render () {
        return ("T");
    }
}


