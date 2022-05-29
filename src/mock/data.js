import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
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
  resume: 'https://lalov1.github.io/docs/resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'uiw.jpg',
    title: 'University of the Incarnate Word',
    info:
      'I worked at the University of the Incarnate Word as the Web Manager, where I helped oversee the operations of the website and mobile app.',
    info2:
      "I've assisted in many large projects such as website redesign and helping implement campus services such as a calendaring system. We use Cascade CMS, which is mainly for Higher Education websites.",
    url: 'https://www.uiw.edu/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'csu-pueblo.jpg',
    title: 'Colorado State University-Pueblo',
    info:
      'I worked at Colorado State University-Pueblo for over 15 years, including four as a student work-study for the Webmaster on campus. During my tenure at the university, I maintained the website and worked as a Frontend Developer creating forms and applications for the Student, Faculty, and Staff Portals.',
    info2: '',
    url: 'https://www.csupueblo.edu/',
    repo: 'https://github.com/lalov1/bootstrap-forms/blob/master/index.html', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'interactive-map.jpg',
    title: 'Interactive Campus Map',
    info:
      'This is an interactive campus map I helped create at CSU-Pueblo using Leaflet, jQuery, and Bootstrap.',
    info2: '',
    url: 'https://www.csupueblo.edu/about/campus/interactive-map.html',
    repo: 'https://github.com/lalov1/campus-map', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'abodio.jpg',
    title: 'Abodio',
    info:
      'This is a project we worked on during our second year in the GoCodeColorado competition. The project utilizes Leaflet, jQuery, and Bootstrap to help an individual to see if they could put an accessory dwelling unit (tiny home) on their property. We ended up being picked as one of the three teams that won the competition.',
    info2: '',
    url:
      'https://www.sos.state.co.us/pubs/newsRoom/pressReleases/2018/PR20180608GoCodeWinners.html',
    repo: 'https://github.com/GoCodeColorado/Abodio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'hits-the-spot.jpg',
    title: 'Hits the Spot',
    info:
      'A project we built for the GoCodeColorado competition, which we were a runner up. We did the project with Leaflet, jQuery, and Bootstrap.',
    info2: '',
    url:
      'https://gazette.com/business/colordo-springs-teams-developing-apps-for-restaurants-water-rights-advance/article_0a1f6e48-8726-5e67-a3c1-3e0cf1b6b4b8.html',
    repo: 'https://github.com/GoCodeColorado/CacheMoney', // if no repo, the button will not show up
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
    {
      id: uuidv1(),
      name: 'free-code-camp',
      url: 'https://www.freecodecamp.org/lalov1',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
