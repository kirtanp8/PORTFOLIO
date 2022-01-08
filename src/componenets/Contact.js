import React from 'react'
import LinkedIn from '../icons/linkedin.png'
import Github from '../icons/github.png'
import Mail from '../icons/mail2.png'

const Contact = () => {
  return (
    <>
 <footer id='contact' className='contact-div'>
      <div className='contact-elements'>
      <h1>Get In Touch</h1>
      <div>
      <a target="_blank" rel="noreferrer" href="mailto:kirtanp8@icloid.com"><img src={Mail} /></a>
      <a target="_blank" rel="noreferrer" href="https://github.com/kirtanp8"><img src={Github} /></a>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kirtanp8/"><img src={LinkedIn} /></a>
      </div>
      <p>I'm currently available to work, so feel free to send me a message</p>
      <p>&copy; Kirtan Patel 2022</p>
      </div>
    </footer>
    </>
  )
}

export default Contact
