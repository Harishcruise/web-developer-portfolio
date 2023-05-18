import React from 'react'
import git from '../Assets/Github.png'
import fig from '../Assets/Figma.png'
import drib from '../Assets/Dribble.png'
import Style from './Header.module.css'

function Header() {
  return (
    <div style={{display:"flex"}}>
    <div className={Style.sideContainer}>
        <div className={Style.line}></div>
        <img src={git} alt='git'/>
        <img src={fig} alt='fig'/>
        <img src={drib} alt='drib'/>
    </div>
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
    </div>
  )
}

export default Header