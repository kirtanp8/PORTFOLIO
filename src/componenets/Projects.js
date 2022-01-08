import React from 'react'
import HTML from '../icons/html.png'
import CSS from '../icons/css.png'
import JavaScript from '../icons/javascript.png'
import Django from '../icons/django.png'
import Express from '../icons/express.png'
import Figma from '../icons/figma.png'
import Github from '../icons/github.png'
import MongoDB from '../icons/mongodb.png'
import Node from '../icons/node.png'
import Python from '../icons/python.png'
import ReactLogo from '../icons/react.png'
import Sass from '../icons/sass.png'
import Bootstrap from '../icons/bootstrap.png'
import Yarn from '../icons/yarn.png'
import NPM from '../icons/npm.png'
import Pokemon from '../icons/PokemonInvaders.png'
import BurntToastImage from '../icons/BurntToast.png'
import MontanNewsImage from '../icons/MontanNews.png'
import SpiritsOClock from '../icons/SpiritsOclock.png'
import { Card, Button } from 'react-bootstrap'

const Projects = () => {
  const projects = [
    {
      title: 'Spirits O\'Clock',
      description: 'Dictumst justo etiam faucibus taciti. Sapien mattis ridiculus fermentum pede mus placerat eu. Ullamcorper rutrum est cubilia proin rhoncus fringilla enim, rhoncus aliquet sociis laoreet. Commodo. Amet odio sociosqu sociis faucibus praesent bibendum. Nascetur sociis lectus nunc velit, ligula vel proin erat libero consectetuer egestas turpis, leo.', 
      thumbnail: SpiritsOClock,
      url: 'https://spiritsoclock2021.herokuapp.com/',
      github: 'https://github.com/kirtanp8/SPIRITSO-CLOCK-PROJECT4',
      logos: [
        {
          name: 'HTML5',
          image: HTML,
        },
        {
          name: 'React',
          image: ReactLogo,
        },
        {
          name: 'Python',
          image: Python, 
        },
        {
          name: 'Django',
          image: Django,
        },
        {
          name: 'JavaScript',
          image: JavaScript,
        },
        {
          name: 'Sass',
          image: Sass,
        },
      ],
    },
    {
      title: 'Burnt Toast',
      description: 'Dictumst justo etiam faucibus taciti. Sapien mattis ridiculus fermentum pede mus placerat eu. Ullamcorper rutrum est cubilia proin rhoncus fringilla enim, rhoncus aliquet sociis laoreet. Commodo. Amet odio sociosqu sociis faucibus praesent bibendum. Nascetur sociis lectus nunc velit, ligula vel proin erat libero consectetuer egestas turpis, leo.', 
      thumbnail: BurntToastImage,
      url: 'burnt-toast-ga.herokuapp.com',
      github: 'https://github.com/kirtanp8/BURNT-TOAST-PROJECT3',
      logos: [
        {
          name:'HTML5',
          image: HTML,
        },
        {
          name: 'JavaScript',
          image: JavaScript,
        },
        {
          name: 'React',
          image: ReactLogo,
        },
        {
          name: 'MongoDB',
          image: MongoDB,
        },
        {
          name: 'Express',
          image: Express,
        },
        {
          name: 'NodeJs',
          image: Node,
        }, 
        {
          name: 'Sass',
          image: Sass, 
        },
      ]
    },
    {
      title: 'MontanNews',
      description: 'Dictumst justo etiam faucibus taciti. Sapien mattis ridiculus fermentum pede mus placerat eu. Ullamcorper rutrum est cubilia proin rhoncus fringilla enim, rhoncus aliquet sociis laoreet. Commodo. Amet odio sociosqu sociis faucibus praesent bibendum. Nascetur sociis lectus nunc velit, ligula vel proin erat libero consectetuer egestas turpis, leo.',
      thumbnail: MontanNewsImage,
      url: 'https://montannews2021.netlify.app/',
      github: 'https://github.com/kirtanp8/NEWS-API-PROJECT2',
      logos: [
        {
          name: 'React',
          image: ReactLogo,
        }, 
        {
          name:'HTML5',
          image: HTML,
        },
        {
          name: 'JavaScript',
          image: JavaScript,
        },
        {
          name: 'CSS3',
          image: CSS,
        },
      ]
    },
    {
      title: 'Pokemon Space Invaders',
      description: 'Dictumst justo etiam faucibus taciti. Sapien mattis ridiculus fermentum pede mus placerat eu. Ullamcorper rutrum est cubilia proin rhoncus fringilla enim, rhoncus aliquet sociis laoreet. Commodo. Amet odio sociosqu sociis faucibus praesent bibendum. Nascetur sociis lectus nunc velit, ligula vel proin erat libero consectetuer egestas turpis, leo.',
      thumbnail: Pokemon,
      url: 'https://kirtanp8.github.io/Pokemon-Space-Invaders-PROJECT1/',
      github: 'https://github.com/kirtanp8/Pokemon-Space-Invaders-PROJECT1',
      logos: [
        {
          name:'HTML5',
          image: HTML,
        },
        {
          name: 'JavaScript',
          image: JavaScript,
        },
        {
          name: 'CSS3',
          image: CSS,
        },
      ],
    },
  ]

  return (
    <section id='projects'>
      <div className='take-space-projects'></div>
      <div className='projects-elements'>
      <h1>My Projects</h1>
      <ul className='cards-div'>
        {projects.map((project, index) => (
          <li key={index}>  
          <Card className='card-div' id={project.title.split(' ')[0]}>
            <div className='picture-div' >
              <Card.Img src={project.thumbnail} alt="Project Image" />
            </div>
            <div id='body-div' className='body-div'>
            <Card.Body>
              <Card.Title className='title'>
                {project.title}
              </Card.Title>
              <Card.Text>
                {project.description}
              </Card.Text>
              <div className='logos'>
                {project.logos.map((logo, index) => (
                  <div>
                  <img src={logo.image} />
                  <p>{logo.name}</p>
                  </div>
                ))}
              </div>
            </Card.Body>
            <div className='project-buttons'>
             <a target="_blank" rel="noreferrer" href={project.github}><Button id='button-for-project'>View Source Code</Button></a>
             <a target="_blank" rel="noreferrer" href={project.url}><Button id='button-for-project'>Check it Out</Button></a>
            </div>
            <div className='take-space'></div>
            </div>
          </Card>
          </li>
        ))}
      </ul>
      </div>
    </section>
  )
}

export default Projects
