import React from 'react'
import './styles.scss';
// import { FaLinkedin } from 'react-icons/fa';
// import { Animate } from "react-simple-animate";

export const Home = () => {
  return (
    <section className='home' id='home'>
      <div className='home__text-wraper'>
        <h1>
          Hello I'm Namrata
          <br />
          Front End Developer.
        </h1>
      </div>
      {/* <Animate play duration={2.5} start={{ opacity: 0 }} end={{ opacity: 1 }} delay={.8}>
        <div className="contact-me">
          <div className="contact-me__buttons-wrapper">
            <button>Hire me</button>
            <a href=".">Download resume</a>

          </div>
          <div className="contact-me__socials-wrapper">
            <p>Know more</p>
            <FaLinkedin className="icon" size={30} />
          </div>
        </div>
      </Animate> */}
    </section>
  )
}
