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
    'My toolkit: HTML, CSS, JS, React, Material UI, Boostrap, Shopify, WordPress, SquareSpace ',
  resume: './RosemaryLy-Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'JohnPianoSchool.png',
    title: "John's Piano School",
    info: 'A custom landing page with video background for a piano teacher.',
    info2: 'Built with HTML, CSS and Javascript',
    url: 'https://rosemaryly.github.io/PianoLandingPage/',
    repo: 'https://github.com/RosemaryLy/PianoLandingPage', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'SquareBreath.png',
    title: 'Square Breathing App',
    info:
      'Square breathing is a breathing technique used to relieve stress. This app is a visual tool to help guide a user through the technique',
    info2: 'Made with HTML, CSS and JS',
    url: 'https://rosemaryly.github.io/sqaurebreath/',
    repo: 'https://github.com/RosemaryLy/sqaurebreath', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cryptotracker.png',
    title: 'Simple Cryptocurrency Tracker',
    info:
      "A cryptocurrency tracker that uses the coinGecko API to fetch data about cryptocurrencies and displays them in a simple list. Tailwind CSS was used for the styling of the application and local storage was used for storing a user's list",
    info2: 'Made with React, Tailwind CSS, CoinGecko API',
    url: 'https://rosemaryly.github.io/simple-crypto-tracker/',
    repo: 'https://github.com/RosemaryLy/simple-crypto-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'AdventCalendar.png',
    title: 'React Advent Calendar',
    info: 'A fun and simple advent calendar!',
    info2: 'Built with HTML, CSS, React and styled-components',
    url: 'https://rosemaryly.github.io/AdventCalendar/',
    repo: 'https://github.com/RosemaryLy/AdventCalendar', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'CoffeeNLaundry.png',
    title: 'Coffee and Laundry',
    info: 'A simple information landing page for a Laundromat ',
    info2: 'Made with HTML, CSS and Boostrap',
    url: 'https://rosemaryly.github.io/CoffeeAndLaundry/',
    repo: 'https://github.com/RosemaryLy/CoffeeAndLaundry', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'MatildaCupcakes.png',
    title: "Matilda's Cupcke Emporium",
    info: 'A fun and colourful website for a cupcake store.',
    info2: 'Built with Gatsby and Boostrap',
    url: 'https://rosemaryly.github.io/MatildasCupcakes/',
    repo: 'https://github.com/RosemaryLy/MatildasCupcakes', // if no repo, the button will not show up
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
