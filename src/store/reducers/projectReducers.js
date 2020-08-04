
const projects = (state=[], action) => {
    if(action.type === 'fetchProjects'){
        return action.projects;
    } else {
        return state;
    }
}

export default projects;