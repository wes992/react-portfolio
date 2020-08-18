import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Social.scss';

class Social extends Component {
    state = {  }
    render() { 
        return ( 
            <span className="social">Social Links:
                <span><a href="https://linkedin.com">
                <FontAwesomeIcon
                    icon='home' 
                    size="lg"/>
                    <b>Home</b></a>
                </span> 
                <span><a href="https://github.com">
                <FontAwesomeIcon
                    icon='home' 
                    size="lg"/>
                    <b>Home</b></a>
                </span> 
                <span><a href="https://stackoverflow.com">
                <FontAwesomeIcon
                    icon='home' 
                    size="lg"/>
                    <b>Home</b></a>
                </span> 
                <span><a href="https://facebook.com">
                <FontAwesomeIcon
                    icon='home' 
                    size="lg"/>
                    <b>Home</b></a>
                </span> 
            </span>
         );
    }
}
 
export default Social;