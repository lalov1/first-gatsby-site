import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '/docs/resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Interactive Campus Map',
    info: 'An interactive campus map that I helped create using Leaflet, jQuery, and Bootstrap.',
    info2: '',
    url: 'https://www.csupueblo.edu/about/campus/interactive-map.html',
    repo: 'https://github.com/lalov1/campus-map', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Hits the Spot',
    info:
      'A project we built for the GoCodeColorado competition, which we were a runner up. We did the project with Leaflet, jQuery, and Bootstrap.',
    info2: '',
    url:
      'https://gazette.com/business/colordo-springs-teams-developing-apps-for-restaurants-water-rights-advance/article_0a1f6e48-8726-5e67-a3c1-3e0cf1b6b4b8.html',
    repo: 'https://github.com/GoCodeColorado/CacheMoney', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Abodio',
    info: '',
    info2: '',
    url:
      'https://www.sos.state.co.us/pubs/newsRoom/pressReleases/2018/PR20180608GoCodeWinners.html',
    repo: 'https://github.com/GoCodeColorado/Abodio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'University of the Incarnate Word',
    info: '',
    info2: '',
    url: 'https://www.uiw.edu/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Colorado State University-Pueblo',
    info: '',
    info2: '',
    url: 'https://www.csupueblo.edu/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'lallo.vigil@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/lalov1',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/lalov1/',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lallovigil/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/lalov1',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
