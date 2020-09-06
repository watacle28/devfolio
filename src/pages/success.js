import React, {useRef, useEffect} from "react"
import styled from 'styled-components'
import {TimelineLite ,TweenMax, Power3, from} from 'gsap';
import Layout from "../components/layout"
import SEO from "../components/SEO"
import { BsCheckBox } from "react-icons/bs"
import { Link } from "gatsby"

const StyledSuccess = styled.section`
      visibility: hidden;
      display: grid;
    place-items: center;
    height: 60vh;
    svg{
      color: var(--primary-1);
    }
    h1{
      font-size: 10rem;
      @media screen and (max-width: 650px){
        font-size: 5rem;
       
      }
    }
    p{
      font-size: 2rem;
      margin-bottom: 2rem;
      text-align: center;
      @media screen and (max-width: 650px){
        font-size: 1rem;
      }
    }
`
const ThankYouPage = () => {
  let success = useRef(null)

  let tl = new TimelineLite({ delay: .8});

  useEffect(() => {
    TweenMax.to(success, 0, {css: {visibility: 'visible'}})

    tl.staggerFrom([
        success.children[0],
        success.children[1],
        success.children[2]
      ], 1, {
      y: 60,
      opacity:0,
      ease:Power3.easeOut,
      delay: .8
    }, .15)
    
   
  }, [])
 return (
    <Layout>
    <SEO title='Thank You'/>
    <StyledSuccess ref={el => success = el}>
    <h1><BsCheckBox/></h1>
    <p>Thank you for your submission!</p>
    <Link to='/'><div className="theme_btn">Go back Home</div></Link>
    </StyledSuccess>
  </Layout>
 )
}

export default ThankYouPage