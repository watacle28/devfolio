import React, { useState,useEffect,useRef } from "react";
import styled from 'styled-components'
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import {FaCode,  FaHome, FaBriefcase, FaRegUser, FaPenSquare } from "react-icons/fa"
import {BsChatSquareDots} from 'react-icons/bs'
import { Link } from "gatsby";
import {TimelineLite ,TweenMax, Power3} from 'gsap';

const Sidebar = () => {
  let bar = useRef(null) 
 
  let tl = new TimelineLite({ delay: .8});

 useEffect(() => {
  
    // //Ref defs

      //Remove initial flash
      TweenMax.to(bar, 0, {css: {visibility: 'visible'}})
    
    
     tl.from(bar, .5, {x: 80, ease: Power3.easeOut})
        
      
     //Content Animation
    
    }, [])

    //  tl.staggerFrom([
    //   bar.children[0],
    //   bar.children[1],
    //   bar.children[2],
    //   bar.children[3],
    //   bar.children[4],
    //   bar.children[5]
    //    ], 1, {
    //   y: 400,
    //   opacity:0,
    //   ease:Power3.easeOut,
    //   delay: .8
    // }, -.15) 

  const [active, setActive] = useState(false);
  return 	<div ref={el => bar = el} className={`nav ${active ? 'active': ''}`}>
    <Link to="/about"  data-tooltip='About' className="nav-item nav-count-1"><FaRegUser/></Link>
  <Link to="/#contact" data-tooltip='Contact' className="nav-item nav-count-2"><BsChatSquareDots/></Link>
  <Link to="/#blog"  data-tooltip='Blog' className="nav-item nav-count-3"><FaPenSquare/></Link>
  <Link to="/#projects"  data-tooltip='Projects' className="nav-item nav-count-4"><FaBriefcase/></Link>
  <Link  data-tooltip='Skills' to="/#skills" className="nav-item nav-count-5"><FaCode/></Link>
  <Link to="/"  data-tooltip='Home' className="nav-item nav-count-6"><FaHome/></Link>
  <a  className="mask" onClick={()=>setActive(!active)}>+</a>
</div>

}

export default Sidebar
