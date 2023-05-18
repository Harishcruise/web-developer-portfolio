import React from 'react'
import Style from './Header.module.css'

function Header() {
  return (
    <div className={Style.container}>
       <div className={Style.leftContainer}>
        <p>Harish</p>
       </div>
       <div className={Style.rightContainer}>
        <p><span style={{color:"#C778DD"}}>#</span>home</p>
        <p><span style={{color:"#C778DD"}}>#</span>works</p>
        <p><span style={{color:"#C778DD"}}>#</span>about-me</p>
        <p><span style={{color:"#C778DD"}}>#</span>contacts</p>
       </div>
    </div>
  )
}

export default Header