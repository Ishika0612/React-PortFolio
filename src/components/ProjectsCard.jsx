import React from 'react'
import './card.css'

const ProjectsCard = ({heading,desc,link}) => {
  return (
    <>
      <div className='cards'>
           <ul>
            <li>{heading}</li>
           </ul>
           <p>
            {desc}
           </p>
           <a href={link} target='blank'>View</a>
         </div>
    </>
  )
}

export default ProjectsCard