const images = require.context('../assets/Images', true);

export const projectData = [
  {
    _id: '1',
    title: 'Yelp Camp',
    image: images('./YelpCamp.png'),
    description:
      'Campsite Rental App to book local campgrounds, complete with CRUD functions and Auth',
    techStack: 'Mongo, Express, Node',
    demo: images('./YelpCampVid.mp4'),
    repo: 'https://github.com/wes992/YelpCamp',
    link: 'https://campsiterentals.herokuapp.com',
    demoUser: 'Guest',
    demoPw: 'password',
  },
  {
    _id: '2',
    title: 'Rent With Me',
    image: images('./RWM_Snip.png'),
    description:
      'Air-BNB clone application to book housing on trips complete with CRUD funtions and Auth',
    techStack: 'Mongo, Express, Angular, Node (MEAN)',
    demo: images('./rwmVid.mp4'),
    repo: 'https://github.com/wes992/Bookwithme',
    link: 'https://rentwithme.herokuapp.com',
    demoUser: 'test@gmail.com',
    demoPw: 'testtest',
  },
  {
    _id: '3',
    title: 'Rent With Me',
    image: images('./reactRWM.png'),
    description:
      'WORK IN PROGRESS --- Air-BNB clone to book housing, complete with CRUD funtions and Auth',
    techStack: 'Mongo, Express, React, Node (MERN)',
    demo: images('./rwmReactVid.mp4'),
    repo: 'https://github.com/wes992/React-RWM',
    link: 'https://rentwithme.herokuapp.com',
  },
  {
    _id: '4',
    title: 'Patatap Clone',
    image: images('./patatap.png'),
    description:
      'Interactive site that has randomly generated circles & tones played on keypress',
    techStack: 'Jquery, paperJS, Canvas, JS Scripts',
    demo: images('./patatapVid.mp4'),
    repo: 'https://github.com/wes992/patatapClone',
    link: 'https://wes992.github.io/patatapClone/',
  },
  {
    _id: '5',
    title: 'RGB guessing game',
    image: images('./ColorGame.png'),
    description:
      'Interactive game that aids in guessing RGB color codes',
    techStack: 'Jquery, JS Scripts, Event Listeners',
    demo: images('./colorGameVid.mp4'),
    repo: 'https://github.com/wes992/RGB-Game',
    link: 'https://wes992.github.io/RGB-Game/',
  },
  {
    _id: '6',
    title: 'Todo List',
    image: images('./todoList.png'),
    description:
      'Todo list built with Jquery, that uses scripts to manipulate classes',
    techStack: 'Jquery, JS Scripts, HTML/CSS',
    demo: images('./todoVid.mp4'),
    repo: 'https://github.com/wes992/To-Do-List',
    link: 'https://wes992.github.io/To-Do-List/',
  },
];
