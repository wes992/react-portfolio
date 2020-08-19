import React, { Component } from 'react';
import './cube.scss'

class Cube extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="box-area">
                <div className="front"></div>
                <div className="back"></div>
                <div className="right"></div>
                <div className="left"></div>
                <div className="top"></div>
                <div className="bottom"></div>
            </div>
         );
    }
}
 
export default Cube;