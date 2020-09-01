import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';
import {frontEndSkills,BackEndSkills,BackEndTools,frontEndTools} from '../constants/skills'
import Skill from './Skill';

const StyledSkills = styled.section` 
width: 100%;
margin: 2rem auto;
padding: 1rem;
.skills__container{
 display: flex;
width: 100%;
justify-content: center;;
  text-align: center;
}
p{
 margin-top: -1rem;
  text-align: center;
}
.front, .back{
  flex:.5;
  padding: 1rem;
  h4{
    text-align:center;
  }
}

.tools{
  max-width:500px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  div{
    margin-right: 1rem;
    margin-bottom: 1rem;
    background: var(--faint);
    padding: .2rem .5rem;
    padding-bottom:0;
    border-radius: var(--radius);
    text-transform: capitalize;
  }
  span{
    color: var(--primary-1);
    margin-right: .5rem;
  }
}
h4{
 
  text-align: left;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}


`

function Skills() {
    return (
        <StyledSkills className="skills section" id="skills">
        <h2 className="section-title"><span>P</span>rofesional <span>S</span>kills</h2>
        <p>Listed below are some of the technologies I use in frequently</p>
        <div className="skills__container">          
            <div className="front">
              <h3>Front-End</h3>
                 
            {frontEndSkills.map(skill => <Skill key={skill.name} skill={skill}/>)}
            <h4>Tools / softawares used</h4>
               <div className="tools">
               {frontEndTools.map(tool => <div><span>{tool.icon}</span>{tool.name}</div>)}
               </div>
            </div>
              <div className="back">
                <h3>Back-End</h3>
                {BackEndSkills.map(skill => <Skill key={skill.name} skill={skill}/>)}
                <h4>Tools / softawares used</h4>
               <div className="tools">
               {BackEndTools.map(tool => <div><span>{tool.icon}</span>{tool.name}</div>)}
               </div>
                </div> 
            
           
        </div>
    </StyledSkills>
    )
}

export default Skills
