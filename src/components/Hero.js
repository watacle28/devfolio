import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components';
import clo from '../assets/clo.png'
import SocialLinks from "../constants/socialLinks"
import { StyledBtn } from "./StyledBtn";
// ...GatsbyImageSharpFluid
const StyledHero = styled.div`    
   margin-top: -5rem;
  padding-top: 5rem;
  position: relative;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding-left: 4rem;
 padding-right: 4rem;
 overflow: hidden;
 .left{
   flex: .6;
   h1{
     background: var(--theme-gradient);
     /* font-size: 4rem;
     font-weight:900; */
     color: transparent;
     background-clip: text;
     -moz-background-clip: text;
     -webkit-background-clip:text;
     letter-spacing: 3px;
   }
 }
 .right{
   flex:.4;
   .image{
     width:500px;
     height:500px;
     
     background:var(--theme-gradient);
     border-radius: 50%;
     padding: 1rem;
     img{
       width: 100%;
       height: auto;
       border-radius: 50%;
       object-fit: contain;
     }
   }
   
 }

 .coa{
   display: flex;
   margin-top: 2rem;
   .spacer{
     margin: 0 1rem;
   }
 }

    
`
const Hero = () => {
  return(
    <StyledHero>
     
     <div className="left">
       <h4>Hello, I'm</h4>
       <h1>Cleopas</h1>
       <h2>Fullstack Javascript <br/> Web Developer</h2>
      
        <SocialLinks/>
      
     <div className="coa">
    <Link to='#contact'>
    <div className="theme_btn">
       Contact Me
      </div>
    </Link>
      <div className="spacer"></div>
     <Link to='#projects'>  <div className="theme_btn theme_btn_secondary">
      My Projects
      </div></Link>
     </div>
     </div>
     <div className="right">
       <div className="image">
        
        {/* <img src={clo} alt="cleopas"/> */}
       </div>
     </div>
     </StyledHero>
  )
}

export default Hero
