import React from 'react'
import './Home.css'
import ContactIcons from '../components/ContactIcons'
import Photo from '../assets/me2.jpg'
import Resume from '../assets/Ishika.resume.pdf'

const Home = () => {
  return (
   <>
   <div className='homediv'>
    <div className='firstdiv'>
        <div style={{display:'flex',flexDirection:'column',gap:8}}><h2>Hi,</h2>
             <h3>I’m <span>Ishika Kaushik,</span></h3>
             <p> I specialize in frontend development, creating responsive and interactive web applications using HTML, CSS, and JavaScript. My strong foundation in Data Structures and Algorithms with Java helps me write optimized, scalable, and efficient code. I’m constantly exploring new technologies to enhance user experiences</p>
         </div> 
       <div>  <button><a href={Resume} download>Download Resume</a></button> </div>
       <div className='icons'> <ContactIcons/> </div>
    </div>
    <div className='seconddiv'>
         <img src={Photo} alt="myphoto"/>
    </div>
    </div>
    </>
  )
}

export default Home