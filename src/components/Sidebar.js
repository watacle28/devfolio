import React, { useState } from "react";
import styled from 'styled-components'
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import {FaCode,  FaHome, FaBriefcase, FaRegUser, FaPenSquare } from "react-icons/fa"
import {BsChatSquareDots} from 'react-icons/bs'
import { Link } from "gatsby";


const StyledSideBar = styled.div`
 
/*
=============== 
Sidebar Animation
===============
*/
.sidebar-links li {
  animation: slideRight 0.5s ease-in-out 0.3s forwards;
}
.sidebar-links li:nth-of-type(1) {
  animation-delay: 0.25s;
}
.sidebar-links li:nth-of-type(2) {
  animation-delay: 0.5s;
}
.sidebar-links li:nth-of-type(3) {
  animation-delay: 0.75s;
}
.sidebar-links li:nth-of-type(4) {
  animation-delay: 1s;
}
.sidebar-links li:nth-of-type(5) {
  animation-delay: 1.25s;
}
@keyframes slideRight {
  0% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.sidebar-icons li {
  opacity: 0;
  animation: slideUp 0.5s ease-in-out 0.3s forwards;
}
.sidebar-icons li:nth-of-type(1) {
  animation-delay: 0.25s;
}
.sidebar-icons li:nth-of-type(2) {
  animation-delay: 0.5s;
}
.sidebar-icons li:nth-of-type(3) {
  animation-delay: 0.75s;
}
.sidebar-icons li:nth-of-type(4) {
  animation-delay: 1s;
}
.sidebar-icons li:nth-of-type(5) {
  animation-delay: 1.25s;
}
@keyframes slideUp {
  0% {
    transform: translateY(200px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
`
const Sidebar = () => {
  const [active, setActive] = useState(true);
  return 	<div className={`nav ${active ? 'active': ''}`}>
  <Link to="/#contact" data-tooltip='Contact' className="nav-item nav-count-1"><BsChatSquareDots/></Link>
  <Link to="/#about"  data-tooltip='About' className="nav-item nav-count-2"><FaRegUser/></Link>
  <Link to="/#blog"  data-tooltip='Blog' className="nav-item nav-count-3"><FaPenSquare/></Link>
  <Link to="/#projects"  data-tooltip='Projects' className="nav-item nav-count-4"><FaBriefcase/></Link>
  <Link  data-tooltip='Skills' to="/#skills" className="nav-item nav-count-5"><FaCode/></Link>
  <Link to="/"  data-tooltip='Home' className="nav-item nav-count-6"><FaHome/></Link>
  <a  className="mask" onClick={()=>setActive(!active)}>+</a>
</div>

}

export default Sidebar
