import React, { Component } from 'react';
import FlipCard from '../components/FlipCard/FlipCard';
import connect from '../store/connect';
import fetchProjects from '../actions';


class Projects extends Component {

    componentDidMount() {
        this.props.dispatch(fetchProjects());
    }

    renderProjects = (projects) => 
    projects.map(project => 
         <div key={project._id}>
              {/* className="col-sm-6 col-md-4 p-3" */}
             <FlipCard project={project}/>
         </div>
    );
     
    render() {
         const { projects } = this.props;

        return(
            <div className="project-container">
                <h3 className='slide'>Some of my projects:</h3>
                <div className="row project-list fade-in">
                    {this.renderProjects(projects)}
                </div>
                <div id="modal" className='modalWindow'>
                {/* eslint-disable-next-line */}
                    <a href="#" target='_blank' className='SourceCode'>Source Code</a>
                {/* eslint-disable-next-line */}
                    <a href="#" target='_blank' className='tryItOut'>Try it out!</a>
                    <div className="demoProject">
                        <div className='demoUser'></div>
                        <div className="demoPw"></div>
                    </div>
                    <video src='' height='720' width='840' autoPlay loop alt="video of a website being navigated" className="pop-up"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      projects: state.projects
    }
}

export default connect(mapStateToProps)(Projects);