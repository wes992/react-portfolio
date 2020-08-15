import React from 'react';
import './FlipCard.css';


const FlipCard = ({project}) => {
    const renderModal = () => {
        const modal = document.querySelector("#modal");
        const buttons = document.querySelectorAll(".button");
        const popup = document.querySelector(".pop-up");
        const sourceCode = document.querySelector(".SourceCode");
    
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                modal.classList.add('open');
                popup.classList.add('open');
                
                const gif = button.getAttribute('data-original');
                popup.src=gif;
                sourceCode.href = project.link;
                // console.log('project link is ' + project.link);
                // console.log('SourceCode link is ' + sourceCode.href);

            });
        });
    
        modal.addEventListener('click', (e) => {
            if(e.target.classList.contains('modalWindow')) {
                modal.classList.remove('open');
                popup.classList.remove('open');
            }
        });
        }
        return ( 
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={project.image} alt="Avatar" />
                    <div className='title'>
                        <h5>{project.title}</h5>
                    </div>
                    <p>{project.techStack}</p>
                </div>
                <div className="flip-card-back">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                        <button onMouseUp={renderModal} className='button' data-original={project.demo}>
                            Demo
                        </button>
                </div>
            </div>
        </div>
        );
        
    }
 
    
export default FlipCard