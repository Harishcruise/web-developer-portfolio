import React from 'react'
import Style from './Home.module.css'
import Header from '../Components/Header'

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

            </Header>
        </>
    )
}

export default Home