import React from 'react'
import { PageHeaderContent } from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs'
import { personalData } from './utils';
import { Animate } from "react-simple-animate"
import './styles.scss'

export const About = () => {
  return (
    <section className='about' id="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <Animate play duration={2.5} start={{ opacity: 0.1 }} end={{ opacity: 1 }} delay={0.2}>
      <div className='about__content'>
        <div className='about__content__personalWrapper'>
          <h3 className='developerContent'>Front End Developer</h3>
          <p>Hello! My name is Namrata, 
            My interest in web development started back in 2016 when I build a Web Application as a final year project. In my project I learnt basic skills 
            about HTML, CSS and JS.
            I really admire the way WEB has been evovled over the years. 
            It is quite overwhelming with lot technologies emerging at the same time it is really exciting to 
            upskill ourselves to deliver great user experinces using the latest languages and technologies. 
            I think for almost any business it is really important to provide the customer with an interface
            which is easy to use, and have an positive impact. And to achieve the same I've been working since last six
            years in Web & Mobile Application domain using the latest technologies.
            </p>
          <h3 className='personalContent'>Personal Information</h3>
          <ul>
            {
              personalData.map((item, key) => (
                <li key={key}>
                  <span className='title'>{item.label}</span>
                  <span className='value'>{item.value}</span>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='about__content__servicesWrapper'></div>
      </div>
      </Animate>
    </section>
  )
}
