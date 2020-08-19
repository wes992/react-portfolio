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
                    icon={["fab", "linkedin"]} 
                    size="lg"/>
                    <b>Home</b></a>
                </span> 
                <span><a href="https://github.com">
                <FontAwesomeIcon
                    icon={["fab", "github"]}  
                    size="lg"/>
                    <b>Home</b></a>
                </span> 
                <span><a href="https://stackoverflow.com">
                <FontAwesomeIcon
                    icon={["fab", "stack-overflow"]}
                    size="lg"/>
                    <b>Home</b></a>
                </span> 
                <span><a href="https://facebook.com">
                <FontAwesomeIcon
                    icon={["fab", "facebook"]} 
                    size="lg"/>
                    <b>Home</b></a>
                </span> 
            </span>
         );
    }
}
 
export default Social;