import React from 'react'
import Style from './ProjectCard.module.css'
import rect from '../Assets/Rectangle 22.png'
function ProjectCard() {
  return (
    <div className={Style.cardContainer}>
      <img className={Style.cardImg} src={rect} alt=''/>
      <div className={Style.stackUsed}>
       <p>HTML</p>
       <p>CSS</p>
       <p>python</p>
      </div>
      <div className={Style.projectName}>
      <p>Block Chain</p>
      </div>
      <div className={Style.projectDesc}>
      <p>Good Proj</p>
      </div>

      <div className={Style.btn}> 
       Github {`~~>`}
      </div>
    </div>
  )
}

export default ProjectCard