import React,{useRef, useEffect} from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components';
import SocialLinks from "../constants/socialLinks"
import {TimelineLite ,TweenMax, Power3} from 'gsap';

// 
const StyledHero = styled.div`
visibility: hidden;  
height: auto;  
   margin-top: -5rem;
  padding-top: 5rem;
  position: relative;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding-left: 4rem;
 padding-right: 4rem;
 overflow: hidden;
 min-height: calc(100vh - 5rem);


 @media screen and (max-width: 800px) {
      flex-direction: column-reverse;
     justify-content: center;
     min-height: 640px;
}


 .social-links{
   width: 15rem;
   
@media screen and (max-width: 500px) {
  width: max-content;
  font-size: 1rem;
 
}
 }
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
   h2{
     

@media screen and (max-width: 500px) {
  font-size: 1.5rem;
  
}
     
@media screen and (max-width: 280px) {
  font-size: 1.5rem;
  
}
   }
 }
 .right{
   flex:.4;
   
}
@media screen and (max-width: 500px) {
     height: auto;
    
}
   .image{
     /* width:500px;
     height:500px; */
     
     background:var(--theme-gradient);
     border-radius: 50%;
     padding: 5rem;
     margin-bottom: 2rem;
     @media screen and (max-width: 1280px){
        padding: 1rem;
}
     @media screen and (max-width: 800px){
       width: 200px;
       height: 200px;
       padding:1rem;
       
     }
     @media screen and (max-width: 500px) {
     height: 150px;
     width: 150px;
    
}
     @media screen and (max-width: 280px) {
     
       padding:0
  
}
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
   
@media screen and (max-width: 360px) {
  flex-direction: column;
  .theme_btn{
    &:first-of-type{
      margin-bottom: 1rem;
    }
  }
}
   .spacer{
     margin: 0 1rem;
   }
 

    
`
const Hero = () => {
  let app = useRef(null)
  let coa = useRef(null)
  let heading = useRef(null)
  let image = useRef(null) 
  // const social = useRef(null)
  let tl = new TimelineLite({ delay: .8});
  const data = useStaticQuery(graphql`
    {
      file(name: {eq: "profile"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  useEffect(() => {
    // Images Vars
    const contact = coa.firstElementChild; // or children[0]
    const projects = coa.lastElementChild;
    const imgContainer = image.children[0];
    
    const hello = heading.children[0]
    const name = hello.nextSibling;
    const developer = name.nextSibling;
    const social = developer.nextSibling;
  
    //Remove initial flash
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})
    
   //coa button animations
    tl.from(contact, 1.2, {y: 1280, ease: Power3.easeOut},'Start')
    .from(contact.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    .from(projects, 1.4, {y: 1280, ease: Power3.easeOut}, .2)
    .from(projects.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)

    //Content Animation
    tl.staggerFrom([hello, name, developer, social.children[0], social.children[1],social.children[2],social.children[3],
      social.children[4] ], 1, {
      y: 44,
      opacity:0,
      ease:Power3.easeOut,
      delay: .8
    }, .15, 'Start')
    .from(image, 1, { opacity:0, ease: Power3.easeInOut}, 1)
    .from(imgContainer, 1, {x: 500, opacity: 0, ease: Power3.easeOut}, 1.4)
  
  }, [])
  return(
    <StyledHero ref={el => app = el}>
     
     <div className="left" ref={el => heading = el}>
       <h4>Hi, I'm</h4>
       <h1>Cleopas ,</h1>
       <h2>A Fullstack Javascript <br/> Web Developer</h2>
      
        <SocialLinks />
      
     <div className="coa" ref={el => coa = el}>
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
       <div className="image" ref={el => image = el}>
        <Image fluid = {data.file.childImageSharp.fluid}/>
      
       </div>
     </div>
     </StyledHero>
  )
}


 
export default Hero
