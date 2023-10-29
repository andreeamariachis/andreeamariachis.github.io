import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  fontys,
  elephants,
  shopify,
  carrent,
  jobit,
  tripguide,
  travelpal,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "HTML",
    icon: html,
  },
  {
    title: "CSS",
    icon: css,
  },
  {
    title: "JavaScript",
    icon: javascript,
  },
  {
    title: "ReactJS",
    icon: reactjs,
  },
  {
    title: "Figma",
    icon: figma,
  },
  {
    title: "Git",
    icon: git,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Fontys University of Applied Sciences",
    company_name: "Education",
    icon: fontys,
    iconBg: "white",
    date: "September 2020 - Present",
    points: [
      "I am currently studying ICT & Media Design at Fontys University of Applied Sciences located in Eindhoven, Netherlands.",
      "My study is Media Design, focusing on designing websites and phone applications but also coding websites with HTML, CSS and Javascript for various individual and group projects.",
      "I had the opportunity one semester to take an advanced course called Smart Mobile where I could learn how to create an Android app using the language Kotlin.",
      "My background in Media Design allows me to also emapthize and understand the target audience of a product.",
    ],
  },
  {
    title: "Elephants in the Room",
    company_name: "Work Experience",
    icon: elephants,
    iconBg: "#E6DEDD",
    date: "August 2022 - January 2023",
    points: [
      "I worked as an UI and Front-end intern at Elephants in the Room located in Eindhoven, Netherlands.",
      "I researched and emphathized with the target audience to bring user-friendly designs.",
      "I designed various pages for the software of the company and created iterations based on feedback.",

      "I had the opportunity to work for the first time with ReactJS and bring the designs to life by coding them.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Visualization of Stress Data",
    description:
      "A mobile phone application designed to show PPS (Persistent Physical Symptoms) users  levels of stress data and what activities along the day could affect the data. The group project took place in the sixth semester of my studies and it is owned by Lectoraat IxD. We did research into target audience and data visualization and designed new ways to visualize stress data.",
    tags: [
      {
        name: "figma",
        color: "pink-text-gradient",
      },
      {
        name: "research",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "GLOW App",
    description:
      "A Smart Mobile semester project in which I worked in a group to create an app for the GLOW Festival that takes place in Eindhoven, Netherlands. The app helps the user find points of interest and informations about them. I worked on designing a few pages of the application. (This app was just for the university project, it was not used for the actual festival.",
    tags: [
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },

  {
    name: "TravelPal",
    description:
      "A Smart Mobile semester project in which me and another classmate, Nikita, created an android application for travelers that wish to meet new people. By applying design thinking we could create a user-friendly solution for the target audience. To bring it to life we coded the app using Kotlin.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "research",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: travelpal,
    source_code_link: "https://github.com/",
  },
  {
    name: "Team Dynamics Software",
    description:
      "During my internship I worked on the software of Elephants in the Room. The software's purpose is to improve team dynamics and business process within a company. I had the opportunity to redesign some pages within the software and to code one. This project is confidential.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "research",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
  },
];

export { services, technologies, experiences, testimonials, projects };
