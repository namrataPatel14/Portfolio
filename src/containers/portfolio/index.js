import React from 'react';
import { PageHeaderContent } from '../../components/pageHeaderContent';
import { GiSkills } from 'react-icons/gi'
import { work } from './utils';
import { Animate } from "react-simple-animate";
import './styles.scss'
export const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
      <PageHeaderContent
        headerText="Portfolio"
        icon={<GiSkills size={40} />}
      />
      <Animate play duration={1.5} start={{ opacity: 0.3 }} end={{ opacity: 1 }} delay={.3}>
      <div className='portfolio__content'>
        {
          work.map((item)=>(
           <div key={item.id} className='portfolio__content__innerbox'>
            <div key={item.id} className='portfolio__content__innerbox__wrapper'>
              <h4 className='portfolio__content__innerbox__title'>{item.projectName}</h4>
                <div className='container'>
                  <p className='portfolio__content__innerbox__description'>{item.description}</p>
                   <ul>
                    {
                      item.technologies.map((tech)=>(
                        <li>{tech}</li>
                      ))
                    }
                   </ul>
                </div>
              </div>
           </div>
          ))
        }
      </div>
      </Animate>
    </section>
  )
}
