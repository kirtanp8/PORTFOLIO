import './App.css';
import Nav from './componenets/Nav';
import Intro from './componenets/Intro';
import About from './componenets/About';
import Projects from './componenets/Projects';
import Skills from './componenets/Skills';
import React from 'react';
import Hobbies from './componenets/Hobbies';
import Contact from './componenets/Contact';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <>
    <Router >
    <div id='container'>
    <header>
    <Nav />
    </header>
    <main>
    <Intro />
    <About />
    <Skills />
    <Projects />
    <Hobbies />
    </main>
    <Contact />

    </div>
    </Router>
    </>
  );
}

export default App;
