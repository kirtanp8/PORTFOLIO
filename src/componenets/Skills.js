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

const Skills = () => {
  const technologies = [
    {
      name: "HTML", 
      image: HTML,
    },
    {
      name: "CSS3",
      image: CSS,
    },
    {
      name: "JavaScript",
      image: JavaScript,
    },
    {
      name: "React",
      image: ReactLogo,
    },
    {
      name: "NodeJs",
      image: Node,
    },
    {
      name: "MongoDB",
      image: MongoDB,
    },
    {
      name: "NPM",
      image: NPM,
    },
    {
      name: "Python",
      image: Python,
    },
    {
      name: "Django",
      image: Django,
    },
    {
      name: "Bootstrap",
      image: Bootstrap,
    }, 
    {
      name: "Figma",
      image: Figma,
    },
    {
      name: "Github",
      image: Github,
    },
    {
      name: "Sass",
      image: Sass,
    }, 
    {
      name: "Yarn",
      image: Yarn,
    },
    {
      name: "Express",
      image: Express,
    }
  ]





  return (
    <section id='skills' className='skills-section'>
      <div className='skills-elements'>
      <h1>Technologies & Skills</h1>
      <ul className='skills-icons'>
      {technologies.map((lang, index) => (
        <li className={lang.name} key={index}>
          <img src={lang.image} alt={lang.name} />
          <p>{lang.name}</p>
        </li> 
      ))}
      </ul>
      </div>
    </section>
  )
}

export default Skills
