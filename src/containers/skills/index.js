import React from 'react'
import { PageHeaderContent } from '../../components/pageHeaderContent';
import { GiSkills } from 'react-icons/gi'
import { skillData } from './utils';
import { Line } from 'rc-progress';
import { Animate } from "react-simple-animate"
import './styles.scss'
export const Skills = () => {
  return (
    <section id='skills' className='skills'>
      <PageHeaderContent
        headerText="My Skills"
        icon={<GiSkills size={40} />}
      />
      <Animate play duration={2.5} start={{ opacity: 0.1 }} end={{ opacity: 1 }} delay={0.2}>
      <div className='skills__content-wrapper'>
        {
          skillData.map((item, key) => (
            <div key={key} className="skills__content-wrapper__inner-content">
              {/* <h3 className="skills__content-wrapper__inner-content__category-text">{
                item.label} </h3> */}
              <div>
                {
                  item.data.map((dataItem, index) => (
                    <div className='progressbar-wrapper' key={index}>
                      <p>{dataItem.skillName}</p>
                      <Line percent={dataItem.percentage} 
                      strokeWidth={0.5} strokeColor='var(--selected-theme-main-color)' 
                      strokeLinecap='square'
                      trailWidth='2'
                      />
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
      </Animate>
    </section>
  )
}
