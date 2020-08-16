const images = require.context('../assets/Images', true);

 
 export const ProjectData = [
    {
        _id: '1',
        title: 'Yelp Camp',
        image: images('./YelpCamp.png'),
        description: 'Campsite Rental App to search for and book local campgrounds',
        techStack: 'Mongo, Express, Node',
        demo: images('./YelpCamp.png'),
        repo: 'https://github.com/wes992/YelpCamp',
        link: 'https://campsiterentals.herokuapp.com'
    },
    {
        _id: '2',
        title: 'Rent With Me',
        image: images('./RWM_Snip.png'),
        description: 'Air-BNB clone application to search for and book housing on trips',
        techStack: 'Mongo, Express, Angular, Node (MEAN)',
        demo: images('./RWM_Snip.png'),
        repo: 'https://github.com/wes992/Bookwithme',
        link: 'https://rentwithme.herokuapp.com'
    },
    {
        _id: '3',
        title: 'Rent With Me',
        image: images('./RWM_Snip.png'),
        description: 'Air-BNB clone application to search for and book housing on trips',
        techStack: 'Mongo, Express, React, Node (MERN)',
        demo: images('./RWM_Snip.png'),
        repo: 'https://github.com/wes992/React-RWM',
        link: 'https://rentwithme.herokuapp.com'
    },
    {
        _id: '4',
        title: 'Patatap Clone',
        image: images('./patatap.png'),
        description: 'Interactive site that has randomly generated circles & tones played on keypress',
        techStack: 'Jquery, paperJS, Canvas, JS Scripts',
        demo: images('./patatap.png'),
        repo: 'https://github.com/wes992/patatapClone',
        link: 'https://wes992.github.io/patatapClone/'
    },
    {
        _id: '5',
        title: 'RGB guessing game',
        image: images('./ColorGame.png'),
        description: 'Interactive game that aids in guessing RGB color codes',
        techStack: 'Jquery, JS Scripts, Event Listeners',
        demo: images('./ColorGame.png'),
        repo: 'https://github.com/wes992/RGB-Game',
        link: 'https://wes992.github.io/RGB-Game/'
    },
    {
        _id: '6',
        title: 'Todo List',
        image: images('./todoList.png'),
        description: 'Todo list built with Jquery, that uses scripts to manipulate classes',
        techStack: 'Jquery, JS Scripts, HTML/CSS',
        demo: images('./todoList.png'),
        repo: 'https://github.com/wes992/To-Do-List',
        link: 'https://wes992.github.io/To-Do-List/'
    }
]

export default ProjectData