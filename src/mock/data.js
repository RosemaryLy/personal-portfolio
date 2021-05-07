import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Rosemary Ly | Frontend Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Frontend Developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Rose',
  subtitle: "I'm a Frontend Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I'm a freelance front end developer based in Toronto, Canada.",
  paragraphTwo:
    "When I'm not behind a code editor with a warm cup of coffee, you can typically find me exploring the world through food!",
  paragraphThree:
    "Have a design in mind? I can help turn that design into code for you! Or maybe you're looking for a re-design of your site or even starting from scratch? I can help you with that too!",
  paragraphFour:
    'My toolkit: HTML, CSS, JS, React, Material UI, Boostrap, Shopify, WordPress, SquareSpace, GraphQL, MYSQL, Apollo ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Coffee and Laundry',
    info: 'A simple information landing page for a Laundromat built with HTML, CSS and Boostrap',
    info2: '',
    url: 'https://rosemaryly.github.io/CoffeeAndLaundry/',
    repo: 'https://github.com/RosemaryLy/CoffeeAndLaundry', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'AdventCalendar.gif',
    title: 'React Advent Calendar',
    info: 'A fun and simple advent calendar made with HTML, CSS, React and styled-components',
    info2: '',
    url: 'https://rosemaryly.github.io/AdventCalendar/',
    repo: 'https://github.com/RosemaryLy/AdventCalendar', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'rosemary.ly@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/RosemaryLy',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rosemary-ly-a74552b4/',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/rosemaryly',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
