import React,{useEffect,useRef} from "react"
import styled from 'styled-components'
import Layout from "../components/Layout"
import Project from '../components/Project'
import {TimelineLite ,TweenMax, Power3} from 'gsap';
import { graphql } from "gatsby"
import SEO from "../components/SEO";

const StyledProjects = styled.section`
     visibility: hidden;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      overflow: hidden;
      @media screen and (max-width: 500px){
            flex-direction: column;
        }
`

const ProjectsPage = ({data}) => {
  let title = useRef(null)
  let projects = useRef(null) 
  let tl = new TimelineLite({ delay: .8});

 useEffect(() => {
  
    // //Ref defs

      //Remove initial flash
      TweenMax.to(projects, 0, {css: {visibility: 'visible'}})
    
  
     tl.from(title, 1, {y: -100, ease: Power3.easeOut},'Start')
    
    
    //  //Content Animation
     tl.staggerFrom([
       projects
        ], 1.4, {
       x: -1280,
       opacity:0,
       ease:Power3.easeOut,
       delay: .8
     }, .15, 'Start')
   
 }, [])
  return <Layout>
    <SEO title='Projects' description='A collection of my work, enjoy!!!'/>
    <h2 ref={el => title = el} className='section-title'>My <span>P</span>rojects</h2>
    <StyledProjects ref={el => projects = el}>
    {data.allStrapiProjects.nodes.map(project => <Project project={project}/>)}
    </StyledProjects>
  </Layout>
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        Name
        Stack {
          tech
        }
        Summary
        desc
        id
        isLive
        livelink
        repo
        screenshot {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        slug
      }
    }
  }
`
export default ProjectsPage
