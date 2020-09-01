import React from "react";
import styled from 'styled-components'
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import clo from '../assets/clo.png'
import batman from '../assets/batman.gif'
import Image from "gatsby-image"
import { FaUserAlt, FaMapPin, FaHome, FaPhoneAlt } from "react-icons/fa";
import { DiMongodb,DiReact,DiNodejsSmall} from "react-icons/di";
import { GiSoccerBall, GiTv, GiChessKing } from "react-icons/gi";
import SocialLinks from "../constants/socialLinks"
import ex from '../assets/express.png'
import { TiLocation } from "react-icons/ti";
import {MdEmail} from 'react-icons/md'

const StyledTitle = styled.h2`
   margin: 0 auto;
   padding-left:1rem;
   width: 100%;
   max-width: 1000px;
   font-weight: normal;
   .self{
     background: var(--theme-gradient);
    color: transparent;
    background-clip: text;
    -moz-background-clip: text;
    -webkit-background-clip:text;
    letter-spacing: 3px;
    font-weight: 900;
   }

`

const StyledAbout = styled.div`
position: relative;
padding: 1rem;
  display: flex;
  width: 100%;
  max-width: 1000px;
  margin: 3rem auto;
border: 1px solid var(--theme-inactive);
border-radius: 20px;
  justify-content: space-between;
 
  h4{
      color: var(--primary-1);
      font-weight: 700;
      font-size: 1.5rem;
    }
  .image{
    position: relative;
    background: rgba(50,50,50,.1);
    padding: 1rem;
    border-radius: 20px;
    flex:.3;
    img{
      border-radius: 20px;
      margin-bottom: 2rem;
    }
    .social-links{
      margin-top: 1rem;
    }
  }
  .info{
   
   padding-top: 1rem;
    flex:.7;
    display: flex;
  margin: 0 auto;
  justify-content: space-between;
 
  }
  
  .spacer{
    margin: 0 1rem;
  }
  .left, .right{
    display: flex;
    flex-direction: column;
   
  }
  .left{
    flex: .6;
    .bio{
      margin-top: 2rem;
      a{
        color: var(--primary-1);
        
      }
      .watacle{
        background:var(--theme-inactive);
        padding: 1rem;
        border-radius: 20px;
        span{
          color: var(--primary-1);
         
        }
      }
    }
    .data{
      line-height: 2rem;
    a{color:var(--white)}
      svg{
        color: var(--primary-1);
        margin-right: 1rem;
      }
    }
  }
  .right{
    flex: .4;
    span{
      margin-right: 1rem;
      background: var(--faint);
      padding: .2rem  .5rem 0;
      border-radius: var(--radius);
      margin-bottom: 1rem;
    }
    .tech{
      margin-bottom: 2rem;
      display: flex;
      flex-wrap: wrap;
      svg{
        margin-right: .5rem;
        color: var(--primary-1);
        align-self: center;
      }
    }
  }
  p{
    margin-top: .5rem;
  }
  .blockquote{
    font-size: 1rem;
    background: rgba(50,50,50,.1);
    border-radius: 20px;
    text-align: center;
    a{
      color: var(--primary-1);
      &:hover{
        opacity: .6;
      }
    }
  }
`
// ...GatsbyImageSharpFluid
const About = () => {
  const stack = [{name: 'MongoDb', icon: <DiMongodb/>},{name:'ExpressJs'},
  
  {name:'React', icon: <DiReact/>}, {name:'NodeJs', icon:<DiNodejsSmall/>}]

const hobbies = [{name:'Watching Soccer', icon:<GiSoccerBall/>},
   {name:'Playing Chess', icon:<GiChessKing/>},{name:'Watching The Big Bang Thoery', icon:<GiTv/>}]
  return <Layout>
      <StyledTitle>Hello <span role='image'>👋</span>, I'm<span className="self"> Cleopas T. Wangayi</span></StyledTitle>
    <StyledAbout>
      <div className="image">
        <div className="overshadow"></div>
      <img src={clo} alt="myself and i"/>
      <h4>Contact</h4>
      <SocialLinks/>
      <blockquote className='blockquote'>Make it work, make it right, make it fast. – <span><a href="https://www.kentbeck.com" target="_blank" rel="noopener noreferrer">Kent Beck</a></span></blockquote>
      </div>
      <div className="spacer"></div> 
       
      <div className="info">
    
         <div className="left"> 
        
            <div className="data">
          <span><FaUserAlt/></span>
            <span>{new Date().getFullYear() - 1989}</span>

                      </div>
          <div className="data">
                <span><TiLocation/></span>
                <span>Cape Town , South Africa</span>
          </div>
          <div className="data">
            <span><FaHome/></span><span>Kadoma , Zimbabwe</span>
          </div>
          <div className="data">
            <span><FaPhoneAlt/></span><span>+27 68 006 1233</span>
          </div>
          <div className="data">
            <span><MdEmail/></span><span><a href="mailto:cwangayi@outlook.com">cwangayi@outlook.com</a></span> 
          </div>
         <div className="bio">
         <h4>Bio</h4>
          <p>I am a self-taught fullstack web developer , I currently stay in Cape Town,
             South Africa but originally from Zimbabwe
          </p>
             <p>
            I got interested in web development 2 years ago after coming across a couple of Youtube videos by 
             <span><a href="https://www.youtube.com/user/TechGuyWeb" target="_blank" rel="noopener noreferrer"> Brad Traversy</a></span> and ever since I have been bulding web applications and 
             and learning more
             </p>
             <p>
               I am currently available for freelance work or full-time employment anywhere in the world 
             </p>
             <p className='watacle'>In case you are wondering why my logo spells out <span> Watacle </span> ,
              its just a cocky amalgamation of my surname <span>  Wa</span>ngayi,  
              middle name <span> Ta</span>wanda and first name <span> Cle</span>opas</p>
         </div>
        
         </div>
         <div className="spacer"></div>
         <div className="right">
           <h4>Favourite Tech Stack</h4>
           <div className="tech">
           
          {stack.map((tech,i)=> <span >{tech.icon && tech.icon}{tech.name}</span>)}
           </div>
           <div className="hobbies">
             <h4>When not writing code</h4>
                {hobbies.map((hobby,i)=> <span data-tooltip={hobby.name}>{hobby.icon}</span>)}
                <div className="bbt">
                  <p>The Big Bang Theory is my favourite sitcom ever</p>
                  <img src={batman} alt="i am batman shhhh!" />
                  </div>
           </div>
         </div>
      </div>
     
    </StyledAbout>
  </Layout>
}

export default About
