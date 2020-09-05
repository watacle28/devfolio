import React ,{ useState,useRef }  from "react";
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Project from "./Project"
import { Link } from "gatsby";


import { useEffect } from "react";




const StyledProjects = styled.div`
background: var(--theme-bg-2); 
width: 100%; 
 .work__container{
display: flex;
width: 100%;
justify-content: center;
flex-wrap: wrap;
align-items: center;

@media screen and (max-width: 768px) {
  flex-direction: column;
 
}
}

.theme_btn{
  display: block;
   width: max-content;
   margin: 0 auto;
   opacity: .5;
   a{
     color: var(--theme-white);
   }
 }
`
const Projects = () => {
  

  const data = useStaticQuery(graphql`
    {
      allStrapiProjects (limit: 3){
        nodes {
          Name
          Summary
          desc
          id
          repo
          livelink
          isLive
          screenshot {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          slug
          Stack {
            tech
          }
        }
      }
    }
  `)
 
 
  return ( <StyledProjects data-aos = 'fade-up' data-aos-delay='500'  id="projects"  className='section'>
  <h2 className="section-title"><span>P</span>rojects</h2>

  <div className="work__container">
    {data.allStrapiProjects.nodes.map(project => <Project  project={project} key={project.id}/>)}
  
      </div>
        <div className="theme_btn"><Link to='/projects'>All Projects</Link></div>
     

</StyledProjects>
  )
}

export default Projects
