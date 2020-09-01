import React from "react";
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby";

import proj1 from '../assets/projects-1.jpg'
import proj2 from '../assets/projects-2.jpg'
import proj3 from '../assets/projects-3.jpg'
import { useState } from "react";

const StyledProjects = styled.div`  
 .work__container{
display: flex;
width: 100%;
justify-content: space-between;
}
p{
  
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
 
 const [active, setActive] = useState(null)
  return  <StyledProjects id="projects" className='section'>
  <h2 className="section-title"><span>P</span>rojects</h2>

  <div className="work__container">
    {data.allStrapiProjects.nodes.map(project => <Project  project={project} key={project.id}/>)}
      </div>
      
     

</StyledProjects>
}

export default Projects
