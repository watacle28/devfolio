import React from 'react'
import styled from 'styled-components';


const StyledSkill = styled.div`

 max-width: 450px;
 min-width: 300px;
 width: 100%;
 margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-weight: 400;
  padding: .5rem 1rem;
  margin-bottom: 2rem;
  border: 1px solid var(--faint);
  border-radius: .5rem;
  box-shadow: var(--dark-shadow);
 @media screen and (max-width: 500px){
  min-width: 200px;
 }
.skills__icon{
  font-size: 2rem;
  margin-right: 1rem;
  
}
.skills__names{
  display: flex;
  align-items: center;
 margin-bottom: .5rem;
 svg{
   color: var(--primary-1);
   opacity: .2;
   font-size: 1.5rem;
 }
}
.skills__name{
  margin-left: .5rem;
}
.skills__bar{
  position: absolute;
  left: 0;
  bottom: 0;
  background-color:var(--primary-1);
  height: .5rem;
  border-radius: .5rem;
  z-index: 1;
  width: ${props => parseInt(props.width)}%;
}
`

const Skill = ({skill}) => {
    return (
        <StyledSkill width={skill.percent}>
             
                    <div className="skills__names">
                        {skill.icon}
                        <span className="skills__name">{skill.name}</span>
                    </div>
                    <div className="skills__bar ">

                    </div>
                    <div>
                        <span className="skills__percentage">{skill.percent}%</span>
                    </div>
                
        </StyledSkill>
    )
}

export default Skill
