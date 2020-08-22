import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';

const StyledSkills = styled.section` 
width: 100%;
max-width:600px;
margin: 2rem auto;
    .skills__container{
 display: flex;
 flex-direction: column;
  text-align: center;
}
.skills__subtitle{
  margin-bottom: 1rem;
}
.skills__text{
  margin-bottom: 1rem;
}
.skills__data{
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-weight: 400;
  padding: .5rem 1rem;
  margin-bottom: 2rem;
  border-radius: .5rem;
  box-shadow: 0 4px 25px rgba(14,36,49,.15);
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
}
.skills__html{
  width: 95%;
}
.skills__css{
  width: 85%;
}
.skills__js{
  width: 65%;
}
.skills__ux{
  width: 85%;
}
.skills__img{
  border-radius: .5rem;
}
`

function Skills() {
    return (
        <StyledSkills className="skills section" id="skills">
        <h2 className="section-title"><span>P</span>rofesional <span>S</span>kills</h2>

        <div className="skills__container">          
            <div>
              
                <p className="skills__text">Below is some of the skills i have and an estimate of how much i know about each.</p>
                <div className="skills__data">
                    <div className="skills__names">
                        <FaHtml5/>
                        <span className="skills__name">HTML5</span>
                    </div>
                    <div className="skills__bar skills__html">

                    </div>
                    <div>
                        <span className="skills__percentage">95%</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__names">
                        <FaCss3/>
                        <span className="skills__name">CSS3</span>
                    </div>
                    <div className="skills__bar skills__css">
                        
                    </div>
                    <div>
                        <span className="skills__percentage">85%</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__names">
                        <FaJs/>
                        <span className="skills__name">JAVASCRIPT</span>
                    </div>
                    <div className="skills__bar skills__js">
                        
                    </div>
                    <div>
                        <span className="skills__percentage">65%</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__names">
                        <FaReact/>
                        <span className="skills__name">REACTJS</span>
                    </div>
                    <div className="skills__bar skills__ux">
                        
                    </div>
                    <div>
                        <span className="skills__percentage">85%</span>
                    </div>
                </div>
            </div>
            
            <div>              
                <img src="assets/img/work3.jpg" alt="" className="skills__img"/>
            </div>
        </div>
    </StyledSkills>
    )
}

export default Skills
