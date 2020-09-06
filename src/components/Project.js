import React from "react"
import Image from "gatsby-image"
import {  FaGithub } from "react-icons/fa"
import {BiLinkExternal} from 'react-icons/bi'
import styled from 'styled-components';
import { useState } from "react";
import { Link } from "gatsby";

const StyledProject = styled.div` 
 box-shadow: 0 3px 6px rgba(255,255,255,0.16), 0 3px 6px rgba(255,255,255,0.23);
position: relative;
display: inline-block;
margin: 3rem;
min-width: 300px;
max-width: 450px;
flex: calc(1 / 3);
  perspective: 1000;
  text-align: left;
  transition: all 0.3s 0s ease-in;
  z-index: 2;
 
  @media screen and (max-width: 768px){
	width: 100%;
}

@media screen and (max-width: 500px) {
  margin: 3rem auto 0 auto;
  width: 100%;
  min-width: 200px;
  &:last-of-type{
    margin-bottom: 2rem;
  }
}
 
&:hover {

transform: scale(1.02);
z-index: 20;
}


  .card-title {
    background: var(--theme-inactive);
    padding: 6px 15px 10px;
    position: relative;
    z-index: 0;
    height: 110px;
    
@media screen and (max-width: 500px) {
  height: max-content;
}
    .toggle-info {
      border-radius: 32px;
      height: 32px;
      padding: 0;
      position: absolute;
      right: 15px;
      top: 10px;
      width: 32px;
      cursor: pointer;
     .left,.right {
        
        background: white;
        display: block;
        height: 2px;
        position: absolute;
        top: ${props => props.show ? '15px': '16px'};
        transition: all 0.15s 0s ease-out;
        width: 12px;
     
    }
    .left {
        right: ${props => props.show ? '10px': '14px'};
        transform: rotate(45deg);
      }
      .right {
        left: ${props => props.show ? '10px': '14px'};
        transform: rotate(-45deg);
      }
     
    }
    }
    
    h2 {
      font-size:1.5rem;
      font-weight: 700;
      margin: 0;
   
      padding: 0;
    }
      p {
        display: block;
        font-size: 1rem;
        font-weight: normal; 
        margin-top: 1rem;
        opacity: .6;
        line-height: 1.5rem;
        width: 80%;
      }
 
  
    a.btn {
  background: var(--primary-1);
  border-radius: 4px;
	box-shadow: 0 2px 0px 0 rgba(0,0,0,0.25);
  display: inline-block;
  padding: 6px 30px 8px;
  position: relative;
  text-decoration: none;
  transition: all 0.1s 0s ease-out;
  color: white;
  z-index: 100000;
}

 a.btn:hover {
  opacity: .8;
  box-shadow: 0px 8px 2px 0 rgba(0, 0, 0, 0.075);
  transform: translateY(-2px);
  transition: all 0.25s 0s ease-out;
}


a.btn:active {
  box-shadow: 0 1px 0px 0 rgba(255,255,255,0.25);
  transform: translate3d(0,1px,0);
  transition: all 0.025s 0s ease-out;
}
.card-description {
    padding: 0 15px 10px;
    position: relative;
    font-size: 14px;
    opacity: ${props => props.show ? 1 : 0};
    
    h4{
      opacity: .6;
      color: var(--primary-1);
      font-weight: 900;
      font-size: 1.2rem;
    }
   .techs{
     display: flex;
     width: 100%;
     flex-wrap: wrap;
    span{
      margin-right: .5rem;
      margin-bottom: .5rem;
      background: var(--faint);
      padding: .2rem .5rem;
      border-radius: 5px;
    }
   }
  }

  .card-actions {
  	box-shadow: 0 2px 0px 0 rgba(0,0,0,0.075);
    padding: 10px 15px 20px;
    text-align: center;
    cursor: pointer;
   
  }
  
  .card-flap {
   color: ${props => props.show ? 'white': 'transparent'};
  background: ${props => props.show ? 'var(--theme-inactive)': 'transparent'};
    position: absolute;
    width: 100%;
    transform-origin: top;
    transform: ${props => props.show ? 'rotateX(0)': 'rotateX(-90deg)'};
    z-index: ${props => props.show ? 100 : 0}
  }
  .flap1 {
    transition: all 0.3s 0s ease-out;
    
    z-index: ${props => props.show ? 100 : -1};
  }
  .flap2 {
    transition: all 0.3s .1s ease-out;
    z-index: ${props => props.show ? 90 : -2};
  }
  
.link{
  background: var(--primary-1);
	position: absolute;
	top: 1rem;
	right: 1rem;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
 display: grid;
 place-items: center;
 a{
   color: var(--white);
   font-size: 1.5rem;
   display: grid;
   place-items: center;
   transition: all 0.3s .1s ease-out;
   cursor: pointer;
   &:hover{
     transform: translateY(-2px);
   }
 }
}
.github{
  right: 5rem;
}
`
const Project = ({project}) => {
  const [show, setShow] = useState(false)
  return  <StyledProject  show={show}>
  <div className="card__image-holder">
    <Image fluid={project.screenshot.childImageSharp.fluid}/>
   <div className="link">
   <a href={project.livelink} target="_blank" rel="noopener noreferrer"><BiLinkExternal/></a>
   </div>
   <div className="link github">
   <a href={project.repo} target="_blank" rel="noopener noreferrer"><FaGithub/></a>
   </div>
   
  </div>
  <div className="card-title">
    <a onClick={()=> setShow(!show)}  className="toggle-info btn">
      <span className="left"></span>
      <span className="right"></span>
    </a>
  
    <h2>
       {project.Name}
       
    </h2>
     <p>{project.desc}</p>
  
  </div>
  <div className="card-flap flap1">
    <div className="card-description">
     <h4>Technologies used</h4>
    <div className="techs">
{project.Stack.map((item,i)=> <span key={i}>{ item.tech}</span>)}
    </div>
    </div>
    <div className="card-flap flap2">
      <div className="card-actions">
        <Link to={`/projects/${project.slug}`} className="btn">Read more</Link>
      </div>
    </div>
  </div>
</StyledProject>
}

Project.propTypes = {}

export default Project
