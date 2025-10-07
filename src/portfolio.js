import { number } from "prop-types"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rafsun7892.github.io/portfolio',
  title: 'RS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Rafsun Siddique',

  description:
    'A CSE graduate passionate about computer networking and computer hardware, seeking to pursue a challenging career and be part of a progressive organization that provides opportunities to enhance my knowledge and utilize my skills for the growth of the organization.',
  resume: '/Files/Rafsun_Siddique_CV.pdf',
  social: {
    linkedin: 'http://www.linkedin.com/in/rafsun-siddique-72b614346',
    github: 'https://github.com/Rafsun7892',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Sales Forcasting Model Using Machine Learning',
    description:
      'Developed a sales forecasting model in python using SARIMA that predicts future sales using seasonal sales trend.',
    stack: ['Python', 'SARIMA', 'Machine Learning'],
    sourceCode: 'https://github.com/Rafsun7892/Sales_Forecasting_Model',
  },
  {
    name: 'REACT Website',
    description:
      'Favorite Movie Website built using React that allows users to search and manage a list of favorite movies.',
    stack: ['Javascript', 'React', 'Vite'],
    sourceCode: 'https://github.com/Rafsun7892/Simple_REACT_learning_project',
  },
  {
    name: 'Calculator web app',
    description:
      'A simple calculator web application built using HTML and CSS that performs basic arithmetic operations.',
    stack: ['HTML', 'CSS'],
    sourceCode: 'https://github.com/Rafsun7892/HTML_Calculator',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'CISCO Packet Tracer',
  'Node.js',
  'Git'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'rafsunsiddique11@gmail.com',
  number: '+8801871997892',
  link: 'https://www.facebook.com/siddiquerafsun',
  link_text:'8801871997892'
}

export { header, about, projects, skills, contact }
