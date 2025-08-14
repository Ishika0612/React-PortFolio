import React from 'react'
import './Projects.css'
import ProjectCard from '../components/ProjectsCard'

const Projects = () => {
  return (
   <>
    <div className='projectdiv'>
      <h2>Projects</h2>
      <div className='projectcontent'>
         <ProjectCard heading="Spotify Clone" desc="I developed a Spotify Clone using HTML, CSS, and JavaScript, featuring a responsive UI, playlist display, and functional music player controls, replicating Spotify’s design and enhancing my front-end development skills." link="https://github.com/Ishika0612/Spotify-Clone-" />
         <ProjectCard heading="Password Generator" desc="I developed a Password Generator using React that lets users create secure and customizable passwords. It provides options for length, uppercase, lowercase, numbers, and special characters, helping users improve their online security and manage strong passwords easily." link="https://github.com/Ishika0612/Password-Generator-using-React" />
         <ProjectCard heading="Rock Paper Scissor Game" desc="I built a Rock Paper Scissors game using HTML, CSS, and JavaScript where users can play against the computer. The game randomly generates the computer’s choice, compares it with the player’s selection, and displays the winner. It includes a simple and interactive interface with score tracking, enhancing my JavaScript logic and DOM manipulation skills." link="https://github.com/Ishika0612/JavaScript-projects/blob/main/JS2%20Rock%20Paper%20Scissor%20project" />
      </div>
      
    </div>
    </>
  )
}

export default Projects