import React,{useRef,useEffect} from "react"
import styled from 'styled-components';
import {TimelineLite ,TweenMax, Power3, from} from 'gsap';
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const StyledError = styled.section`
    visibility:hidden;
   
    display: grid;
    
    place-items: center;
    @media screen and (max-width: 650px){
       height: 50vh;
      }
    h1{
      font-size: 15rem;
      color: var(--primary-1);
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

const Error = () => {

  let error = useRef(null)

  let tl = new TimelineLite({ delay: .8});

  useEffect(() => {
    TweenMax.to(error, 0, {css: {visibility: 'visible'}})

    tl.staggerFrom([
        error.children[0],
        error.children[1],
        error.children[2]
      ], 1, {
      y: 60,
      opacity:0,
      ease:Power3.easeOut,
      delay: .8
    }, .15)
  },[])

  return (<Layout>
    <SEO title='404' description='Not found error page'/>
    <StyledError ref={el => error = el}>
    
    <h1>404</h1>
    <p>You are in the endgame mate , not safe at all</p>
    <Link to='/'><div className="theme_btn">Go back Home</div></Link> 
    </StyledError>
    </Layout>
  )
}

export default Error
