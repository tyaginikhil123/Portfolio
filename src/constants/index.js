import {
  mobile,
  backend,
  creator,
  web,
  javascript,
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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "DSA Problem Solver",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Blu Ocean Pvt.Ltd.",
    // icon: starbucks,
    iconBg: "#383E56",
    date: "June 2023 - July 2023",
    points: [
      "Utilize my proficiency in HTML,CSS,Js and Wordpress to create a user friendly and responsive website interface",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create site.",
      "Develop website useing various plugins and themes,implement payment ",
    ],
  },
  {
    title: "Technical Content Writer",
    company_name: "NrAce Coding",
    // icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - Feb 2023",
    points: [
      "Collaborated eith subject matter experts to simplify complex concepts into accessible content",
      "Demonstrated strong analytical thinking and content writing skills to contribute to concepts.",
      "Reviewed technical content,articles,codes and other material",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Executive Member",
    company_name: "Training and Placement Cell,BIET, Jhansi",
    // icon: shopify,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Played a key role in fostering industry connections and expanding the college's corporate network.",
      "Coordinated and managed various career development workshops, placement drives.",
      "Provided mentorship to fellow students, focusing on resume building, interview preparation, and soft skills development.",
      "Contributed to strategic initiatives aimed at enhancing student employability and facilitating successful placements.",
    ],
  },
  {
    title: "• Head of Event Management",
    company_name: "Innovation and Incubation Cell,BIET Jhansi",
    // icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Led the event management team within the Innovation and Incubation Cell at Biet Jhansi, orchestrating successful and impactful events.",
      "Designed and executed a series of high-profile innovation and entrepreneurship events, fostering an environment of creativity and idea incubation.",
      "Demonstrated exceptional organizational skills by coordinating logistics, budgets, and teams to ensure the smooth execution of various events.",
      "Collaborated with diverse stakeholders, including students, faculty, and external partners, to achieve the cell's mission of promoting innovation and entrepreneurial spirit.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "As a beginner web developer and good Problem solver, and I've been amazed at their rapid growth and adaptability.",
    name: "Servendra Tiwari",
    designation: "SDE",
    company: "Trumsy",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "As a beginner web developer,Nikhil impressed me with their quick learning, problem-solving skills, and commitment to quality work.",
    name: "Prashant Chandel",
    designation: "Associate Engineer",
    company: "IndiaMart",
  },
  {
    testimonial:
      "I mentored him in his early web development journey.His genuine passion, strong work ethic, and rapid progress make them a promising web developer with a bright future.",
    name: "Raveet Kumar",
    designation: "SDE",
    company: "Google",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Chat App",
    description:
      "A Chat Application with room based functionality,Employed Socket.io to establish WebSocket connections between clients and the Node.js server,real time communication.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/tyaginikhil123/ChatApp.git",
  },
  {
    name: "Movie Website",
    description:
      "Developed a dynamic web application that displays trending movies and allows users to add movies to their favorites list.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Api",
        color: "green-text-gradient",
      },
      {
        name: "HTML,CSS,JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/tyaginikhil123/Trending-Movie-.git",
  },
  {
    name: "TECHNICAL FEST SITE",
    description:
      "This is website of Innovation and Incubation Cell,BIET Jhansi.This site mainly  contains information about past events,as well as events in future",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "Express.js,AWS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://innovanza.tech/",
  },
];

export { services, technologies, experiences, testimonials, projects };