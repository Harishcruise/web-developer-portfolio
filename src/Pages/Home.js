import React from 'react'
import Style from './Home.module.css'
import Header from '../Components/Header'
import ProjectCard from '../Components/ProjectCard'

function Home() {
    return (
        <>
            <Header>

            <div className={Style.sectionOneContainer}>
            <div className={Style.sectionOne}>
               <div className={Style.leftContainerSecOne}>
               
               <div className={Style.title}>
                  <p>
                    Harish is a <span style={{color:"#C778DD"}}>full-stack developer</span> and <span style={{color:"#C778DD"}}>software engineer</span>.
                  </p>
               </div>
               
               <div className={Style.subTitle}>
                  <p>
                  He crafts responsive websites where technologies meet creativity
                  </p>
               </div>

               <div className={Style.contactBtn}>
                  Contact Me !!
               </div>
                
               </div>
               <div className={Style.RightContainerSecOne}>

               </div>
            </div>
            </div>

            <div className={Style.quotesContainer}>
            <div className={Style.quotes}>
               <p>With great power comes great electricity bill</p>
            </div>

            <div className={Style.author}>
               <p>- Me</p>
            </div>

            </div>

            <div className={Style.sectionTwoContainer}>
                <div className={Style.sectionTwoHeader}>
                  <div className={Style.projectTitle}>
                      <p><span>/</span>projects</p>
                  </div>

                  <div className={Style.stroke}>

                  </div>

                  <div className={Style.viewAllBtn}>
                     <p>View all ~~{`>`} </p>
                  </div>
                </div>

                <div className={Style.projectSection}>
                <div className={Style.projectHead}>
                     <p><span style={{color:"#C778DD"}}>#</span>complete-apps</p>
                </div>

                <div className={Style.projectGrid}>
                     <ProjectCard/>
                </div>

                </div>
            </div>


            </Header>
        </>
    )
}

export default Home