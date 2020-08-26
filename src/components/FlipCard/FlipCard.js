import React from 'react';
import './FlipCard.scss';


const FlipCard = ({project}) => {
    const renderModal = () => {
        const modal = document.querySelector("#modal");
        const buttons = document.querySelectorAll(".button");
        const popup = document.querySelector(".pop-up");
        const sourceCode = document.querySelector(".SourceCode");
        const tryItOut = document.querySelector(".tryItOut");
        let demoUser = document.querySelector(".demoUser");
        let demoPw = document.querySelector(".demoPw");
    
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                modal.classList.add('open');
                popup.classList.add('open');
                
                const gif = button.getAttribute('data-original');
                popup.src=gif;
                sourceCode.href = project.repo;
                tryItOut.href = project.link;
                demoUser.textContent = project.demoUser ? ('Username: ' + project.demoUser) : '';
                demoPw.textContent = project.demoPw ? ('Password: ' + project.demoPw) : '';
                // console.log(demoUser,',',demoPw)

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