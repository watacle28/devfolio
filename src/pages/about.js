import React,{useEffect,useRef} from "react";
import styled from 'styled-components'
import Layout from "../components/Layout"
import clo from '../assets/clo.png'
import batman from '../assets/worth.webp'
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { FaUserAlt,  FaPhoneAlt } from "react-icons/fa";
import { DiMongodb,DiReact,DiNodejsSmall} from "react-icons/di";
import { GiSoccerBall, GiTv, GiChessKing } from "react-icons/gi";
import SocialLinks from "../constants/socialLinks"
import {TimelineLite ,TweenMax, Power3} from 'gsap';
import { TiLocation } from "react-icons/ti";
import {MdEmail} from 'react-icons/md'

const StyledTitle = styled.h2`
   margin: 0 auto;
   padding-left:1rem;
   width: 100%;
   max-width: 1000px;
   font-weight: normal;
   color: #555555;
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
visibility: hidden;
position: relative;
overflow: hidden;
padding: 1rem;
  display: flex;
  width: 100%;
  max-width: 1000px;
  margin: 3rem auto;
border: 1px solid var(--theme-inactive);
border-radius: 20px;
  justify-content: space-between;
 @media screen and (max-width : 600px){
   flex-direction: column-reverse;
   align-items: center;
 }
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
    h4{
      margin-top: 2rem;
    }
    img{
      border-radius: 20px;
      
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
  @media screen and (max-width : 768px){ 
    max-width: 400px;
   flex-direction: column;
   margin-bottom: 2rem;
 }
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
  .bbt{
   img{
     margin: auto;
   }
  }
`
// ...GatsbyImageSharpFluid
const About = () => {
//get image
const data = useStaticQuery(graphql`
{
  file(name: {eq: "clo"}) {
    childImageSharp {
      fluid {
       ...GatsbyImageSharpFluid
      }
    }
  }
}
`)

  const stack = [{name: 'MongoDb', icon: <DiMongodb/>},{name:'ExpressJs'},
  
  {name:'React', icon: <DiReact/>}, {name:'NodeJs', icon:<DiNodejsSmall/>}]

const hobbies = [{name:'Watching Soccer', icon:<GiSoccerBall/>},
   {name:'Playing Chess', icon:<GiChessKing/>},{name:'Watching The Big Bang Thoery', icon:<GiTv/>}]

   let about = useRef(null) 
  let title = useRef(null)
  let tl = new TimelineLite({ delay: .8});


 useEffect(() => {
  
    // //Ref defs
        const imgContainer = about.children[0];
        const info = about.children[2];
        const left = info.children[0]
        const right = info.children[2]
        
      //Remove initial flash
      TweenMax.to(about, 0, {css: {visibility: 'visible'}})
    
   
     tl.from(title, 1, {y: -1280, ease: Power3.easeOut},'Start')
     tl.from(imgContainer.children[0], 1, {x: -1280, ease: Power3.easeOut},.4,'Start')
   
    //  //Image Container Animation
     tl.staggerFrom([
       imgContainer.children[3],
       imgContainer.children[2].children[4],
       imgContainer.children[2].children[3],
       imgContainer.children[2].children[2],
       imgContainer.children[2].children[1],
       imgContainer.children[2].children[0],
       imgContainer.children[1]
        ], 1, {
      //  x: -1280,
       opacity:0,
       ease:Power3.easeOut,
       delay: .4
     }, -.15, 'Start')

     tl.staggerFrom([
       
      left.children[4].children[4],
      left.children[4].children[3],
      left.children[4].children[2],
      left.children[4].children[1],
      left.children[4].children[0],
      left.children[3],
      left.children[2],
      left.children[1],
      left.children[0]
     ], 1.4, {
    // y: -1280,
    opacity:0,
    ease:Power3.easeOut,
    delay: .6
  }, -.15, 'Start')

  tl.staggerFrom([
    right.children[2].children[4].children[1],
    right.children[2].children[4].children[0],
    right.children[2].children[3],
    right.children[2].children[2],
    right.children[2].children[1],
    right.children[2].children[0],
    right.children[1].children[3],
    right.children[1].children[2],
    right.children[1].children[1],
    right.children[1].children[0],
    right.children[0]
  ], 1.8, {
    // x: 1280,
 opacity:0,
 ease:Power3.easeOut,
 delay: .8
}, -.15, 'Start')
   
 }, [tl])
  return <Layout>
      <StyledTitle ref={el => title = el}>Hello <span role='image'>👋</span>, I'm<span className="self"> Cleopas T. Wangayi</span></StyledTitle>
    <StyledAbout ref={el => about = el}>
      <div className="image">
      <Image fluid = {data.file.childImageSharp.fluid}/>
      <h4>Contact</h4>
      <SocialLinks/>
      <blockquote className='blockquote'>Make it work, make it right, make it fast. – <span><a href="https://www.kentbeck.com" target="_blank" rel="noopener noreferrer">Kent Beck</a></span></blockquote>
      </div>
      <div className="spacer"></div> 
       
      <div className="info">
    
         <div className="left"> 
        
            <div className="data">
          <span><FaUserAlt/></span>
            <span>Born {new Date().getFullYear() - 1989} years ago</span>

                      </div>
          <div className="data">
                <span><TiLocation/></span>
                <span>Cape Town , South Africa</span>
          </div>
          {/* <div className="data">
            <span><FaHome/></span><span>Kadoma , Zimbabwe</span>
          </div> */}
          <div className="data">
            <span><FaPhoneAlt/></span><span>+27 68 006 1233</span>
          </div>
          <div className="data">
            <span><MdEmail/></span><span><a href="mailto:cwangayi@outlook.com">cwangayi@outlook.com</a></span> 
          </div>
         <div className="bio">
         <h4>Bio</h4>
          <p>I am a self-taught fullstack web developer  , I currently stay in Cape Town,
             South Africa .

         </p>
             <p>
            I started learning web development 2 years ago with the help of Youtube videos by 
             <span><a href="https://www.youtube.com/user/TechGuyWeb" target="_blank" rel="noopener noreferrer"> Brad Traversy</a></span> and now I can build fullstack web applications using React and NodeJs(using Restful or Graphql) .
             Currently I am learning VueJs.
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
