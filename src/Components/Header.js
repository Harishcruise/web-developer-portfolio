import React from 'react'
import git from '../Assets/Github.png'
import fig from '../Assets/Figma.png'
import linkedin from '../Assets/Linkedin.png'
import Style from './Header.module.css'

function Header({children}) {
  return (
    <div style={{display:"flex"}}>
    <div className={Style.sideContainer}>
        <div className={Style.line}></div>
        <img src={git} alt='git'/>
        <img src={fig} alt='fig'/>
        <img src={linkedin} alt='linkin'/>
    </div>
    
    <div style={{width:"100%"}}>
    <div className={Style.container}>
       <div className={Style.leftContainer}>
        <p>Harish</p>
       </div>
       <div className={Style.rightContainer}>
        <p className={Style.btn}><span style={{color:"#C778DD",marginRight:"2px"}}>#</span>home</p>
        <p className={Style.btn}><span style={{color:"#C778DD",marginRight:"2px"}}>#</span>works</p>
        <p className={Style.btn}><span style={{color:"#C778DD",marginRight:"2px"}}>#</span>about-me</p>
        <p className={Style.btn}><span style={{color:"#C778DD",marginRight:"2px"}}>#</span>contacts</p>
       </div>
    </div>
    <>
      {children}
    </>
    </div>
    </div>
  )
}

export default Header