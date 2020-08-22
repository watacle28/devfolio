import React from "react";
import styled from 'styled-components'
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby";

import proj1 from '../assets/projects-1.jpg'
import proj2 from '../assets/projects-2.jpg'
import proj3 from '../assets/projects-3.jpg'

const StyledProjects = styled.div`  
 .work__container{
display: flex;
}
.work__img{
  box-shadow: 0 4px 25px rgba(14,36,49,.15);
  border-radius: .5rem;
  overflow: hidden;
  margin: 0 1rem;
}
.work__img img{
  transition: 1s;
  cursor: pointer;
}
.work__img img:hover{
  transform: scale(1.1);
}
`
const Projects = () => {
  return  <StyledProjects id="projects">
  <h2 className="section-title"><span>P</span>rojects</h2>

  <div className="work__container">
      <div className="work__img">
          <img src={proj1} alt=""/>
      </div>
      <div className="work__img">
          <img src={proj2} alt=""/>
      </div>
      <div className="work__img">
          <img src={proj3} alt=""/>
      </div>
      
     
  </div>
</StyledProjects>
}

export default Projects
