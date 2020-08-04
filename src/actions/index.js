import { ProjectData } from '../store/ProjectData';


const fetchProjects = () => {
    return {
        type: 'fetchProjects',
        projects: ProjectData
    }
}

export default fetchProjects;