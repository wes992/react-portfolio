import React from 'react';
import Portrait from '../assets/Images/Hampton.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="col-8">
        <h3>About:</h3>
        <p className="fade-in">
          I am an experienced Developer, with a primary
          skillset in building Responsive Web apps with
          React. I focus primarily on building re-usable
          components and integrating with API's. I
          absolutely love what I do and I am a true techie
          at heart. I am always looking to expand my
          knowledge and take on a new obstacle.
        </p>
      </div>
      <div className="fade-in">
        <img
          className="portrait"
          src={Portrait}
          alt="man smiling"
        />
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export { About };
