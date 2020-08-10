import React from 'react';

function Animation() {
    return (
        <div className='body-container'>
        <h1 aria-label=" Hi, I’m Wes,web developer." className=" h1-animation"> 
            <div className='slide'>
                <span className="letter ">H</span>
                <span className="letter ">i</span>
                <span className="letter ">,</span><br/>
            </div>
            <div className='slide delay1'> 
                <span className="letter">I</span>
                <span className="letter">’</span>
                <span className="letter wordSpace">m</span>  
                <span className="letter">W</span>
                <span className="letter">e</span>
                <span className="letter">s</span>
                <span className="letter">,</span><br/>
            </div>
            <div className='slide delay2'>
                <span className="letter wordSpace">a</span>
                <span className="letter">w</span>
                <span className="letter">e</span>
                <span className="letter wordSpace">b</span> 
                <span className="letter">d</span>
                <span className="letter">e</span>
                <span className="letter">v</span>
                <span className="letter">e</span>
                <span className="letter">l</span>
                <span className="letter">o</span>
                <span className="letter">p</span>
                <span className="letter">e</span>
                <span className="letter">r</span>
                <span className="letter">.</span>
            </div>
        </h1>
        <p className='delay3 fade-in'>Full-Stack | Jr. Dev | Self-taught</p>
    </div>
    )
}

export default Animation;