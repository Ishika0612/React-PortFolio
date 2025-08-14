import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
  <>
    <div className='skilldiv'>
       <h2>Skills</h2>
       <div className='skillcontent'>
        <div className='content'>
            <h3>Frontend</h3>
            <div className='skill'>
                <span>HTML</span>
                 <span>CSS</span>
                  <span>JavaScript</span>
                   <span>React JS</span>
            </div>
        </div>
        <div className='content'>
            <h3>Backend</h3>
            <div className='skill'>
                <span>Node JS</span>
                 <span>Express JS</span>
                  <span>MongoDB</span>
            </div>
        </div>
        <div className='content'>
            <h3>Languages</h3>
            <div className='skill'> 
                <span>Java</span>
                 <span>C++</span>
                  <span>C</span>
            </div>
        </div>
        <div className='content'>
            <h3>Tools</h3>
            <div className='skill'>
                <span>Git</span>
                 <span>Github</span>
                  <span>VS code</span>
            </div>
        </div>
       </div>
    </div>
  </>
  )
}

export default Skills