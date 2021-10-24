import React from 'react';

const ProjectModal = ({ show, onClose, ...project }) => {
  const {
    _id,
    demo,
    repo,
    link,
    demoUser = '',
    demoPw = '',
  } = project;

  return (
    <div
      id={`modal`}
      className={
        show === _id ? 'modalWindow open' : 'modalWindow'
      }
      onClick={(e) => !!e.target.id && onClose()}
    >
      <video
        src={demo}
        autoPlay
        loop
        alt="video of a website being navigated"
        className={show ? 'video open' : 'video'}
      />
      <div className="demoProject">
        <a
          href={repo}
          target="_blank"
          className="demoProject__link"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
        <a
          href={link}
          target="_blank"
          className="demoProject__link"
          rel="noopener noreferrer"
        >
          Try it out!
        </a>

        {!!demoUser && (
          <div className="demo-credentials">
            <div className="demo-credentials__user">
              {`Username: ${demoUser}`}
            </div>
            <div className="demo-credentials__pw">
              {`Password: ${demoPw}`}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { ProjectModal };
