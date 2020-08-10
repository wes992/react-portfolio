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
         <div key={project._id} className="col-sm-6 col-md-4 p-3">
             <FlipCard project={project}/>
         </div>
    );
     
    render() {
         const { projects } = this.props;

        return(
            <div className="project-container container-fluid card-list">
                <div className="row">
                    {this.renderProjects(projects)}
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