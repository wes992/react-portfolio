const icons = require.context('../assets/icons', true);

export const skillData = [
  {
    _id: '1',
    icon: icons('./frontend.png'),
    altDesc: 'square computer screen with text across',
    title: 'Front End',
    techs: [
      'HTML5',
      'CSS | SCSS',
      'JavaScript',
      'React | Redux',
      'Angular',
    ],
  },
  {
    _id: '2',
    icon: icons('./server.png'),
    altDesc: 'square computer towers laying horizontally',
    title: 'Back End',
    techs: [
      'NodeJS',
      'Express',
      'Postman',
      'Authentication | Authorization',
    ],
  },
  {
    _id: '3',
    icon: icons('./database.png'),
    altDesc: 'circular discs stacked on top of each other',
    title: 'Databases',
    techs: ['MongoDB', 'mySQL', 'PostgreSQL'],
  },
];
