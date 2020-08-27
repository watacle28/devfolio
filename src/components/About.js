import React from "react";
import styled from 'styled-components'
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const StyledAbout = styled.div`  
  `

const About = () => {
  return <StyledAbout id='about'>
    <h2 className='section-title'>About Me</h2>
  </StyledAbout>
}

export default About
