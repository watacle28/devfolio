import React ,{useEffect, useRef }from "react";
import styled from 'styled-components';
import {TimelineLite ,TweenMax, Power3, from} from 'gsap';
import Aos from 'aos'
import 'aos/dist/aos.css';
import Navbar from "./Navbar"
import Footer from "./Footer"

const StyledLayout = styled.main` 
 max-width: var(--max-width);
 margin : 0 auto; 
visibility: hidden;
 overflow-x: hidden;
 .children{
  min-height: calc(100vh - 5rem - 11rem);
 
 }
  `


const Layout = ({ children }) => {
  let nav = useRef(null)

  let tl = new TimelineLite({ delay: .8});
  
  useEffect(() => {
  
  
    const logo = nav.children[0].children[0];
    const links = nav.children[0].children[1];
    const vana = nav.children[1]
    const footer = nav.children[2]
    
    console.log({vana, footer});
    
    // //Remove initial flash
    TweenMax.to(nav, 0, {css: {visibility: 'visible'}})
    TweenMax.to(links, 0, {css: {visibility: 'visible'}})

   
       tl.from(links, 0.1, {y: -120, ease: Power3.easeOut})
       
     .from(links.children[0], 1, {y: -120, opacity: 0, ease: Power3.easeOut}, .1)
     .from(logo,1, {x:-400,opacity:0, ease: Power3.easeIn},.1)
     .from(footer.children[0],1, {y:-40,opacity:0, ease: Power3.easeIn},.2)
     .from(footer.children[1],1, {x: 400,opacity:0, ease: Power3.easeIn},.4)
     .from(footer.children[2],1, {x:-400,opacity:0, ease: Power3.easeIn},.6)
     .from(links.children[1], 1, {y: -120, opacity: 0, ease: Power3.easeOut}, .2)
     .from(links.children[2], 1, {y: -120, opacity: 0, ease: Power3.easeOut}, .3)
     .from(links.children[3], 1, {y: -120, opacity: 0, ease: Power3.easeOut}, .4)
     .from(links.children[4], 1, {y: -120, opacity: 0, ease: Power3.easeOut}, .5)
     .from(links.children[5], 1, {y: -120, opacity: 0, ease: Power3.easeOut}, .6)
    
     
      Aos.init({
        duration: 1000
      })

       return () => {
         Aos.refresh()
       }
    
    
  }, [])
  return (
    <StyledLayout ref={el => nav = el}>
     <Navbar />
     {/* <Sidebar/> */}
   <div className="children">
     {children}
   </div>
     <Footer/>
    </StyledLayout>
  )
}

export default Layout
