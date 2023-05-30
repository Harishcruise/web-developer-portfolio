import React from 'react'
import Style from './Home.module.css'
import Header from '../Components/Header'
import ProjectCard from '../Components/ProjectCard'
import group from '../Assets/Group 36.png'

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
                {/* <div className={Style.projectHead}>
                     <p><span style={{color:"#C778DD"}}>#</span>complete-apps</p>
                </div> */}

                <div className={Style.projectGrid}>
                     <ProjectCard/>
                     <ProjectCard/>
                     <ProjectCard/>
                     <ProjectCard/>
                     <ProjectCard/>
                     <ProjectCard/>
                </div>

                </div>
            </div>

            <div className={Style.skillSection}>
            <div className={Style.sectionTwoHeader}>
                  <div className={Style.projectTitle}>
                      <p><span>/</span>skills</p>
                  </div>

                  <div className={Style.stroke}>

                  </div>
{/* 
                  <div className={Style.viewAllBtn}>
                     <p>View all ~~{`>`} </p>
                  </div> */}
                </div>
            <div className={Style.skillInnerSection}>
            <div className={Style.skillInnerLeft}>
               <img alt='' src={group}/>
            </div>
            <div className={Style.skillInnerRight1}>
               <div className={Style.card}>
                  <div className={Style.cardHead}>
                     <p>Languages</p>
                  </div>
                  <div>
                     <p className={Style.cardDesc}>
                        TypeScript Java                      
                     </p>
                  </div>
               </div>
            </div>


            <div className={Style.skillInnerRight2}>
            <div className={Style.card}>
                  <div className={Style.cardHead}>
                     <p>Languages</p>
                  </div>
                  <div>
                     <p className={Style.cardDesc}>
                        TypeScript Java                      
                     </p>
                  </div>
               </div>
            
               <div className={Style.card}>
                  <div className={Style.cardHead}>
                     <p>Languages</p>
                  </div>
                  <div>
                     <p className={Style.cardDesc}>
                        TypeScript Java                      
                     </p>
                  </div>
               </div>
            </div>

            
            <div className={Style.skillInnerRight3}>
            <div className={Style.card}>
                  <div className={Style.cardHead}>
                     <p>Languages</p>
                  </div>
                  <div>
                     <p className={Style.cardDesc}>
                        TypeScript Java                      
                     </p>
                  </div>
               </div>
            </div>

            </div>    
            </div>



            <div className={Style.aboutMe}>
            <div className={Style.sectionTwoHeader}>
                  <div className={Style.projectTitle}>
                      <p><span>/</span>about me</p>
                  </div>

                  <div className={Style.stroke}>

                  </div>
{/* 
                  <div className={Style.viewAllBtn}>
                     <p>View all ~~{`>`} </p>
                  </div> */}
                </div>

                <div className={Style.skillInnerSection}>
                   <div className={Style.aboutMeRight}>
                     <p>
                        Hello, I am Harish
                     </p>
                     <p>
                     I’m a self-taught front-end developer based in Ontario, Canada. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. 
                     </p>
                     <p>
                     Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                     </p>
                     <div className={Style.contactBtn}>
                  Read More {`->`}
               </div>

                   </div>
                   <div className={Style.aboutMeLeft}>

                   </div>
                </div>
            </div>


            </Header>
        </>
    )
}

export default Home