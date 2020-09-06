import React, {useEffect, useRef} from 'react'
import { graphql, Link } from "gatsby"
import {TimelineLite ,TweenMax, Power3} from 'gsap';
import Image from 'gatsby-image'
import styled from 'styled-components';
import Layout from "../components/Layout"
import {FaGithub} from 'react-icons/fa'
import {BiLinkExternal} from 'react-icons/bi'
import ReactMarkdown from "react-markdown"
import SEO from '../components/SEO';

const StyledProject = styled.div`
visibility: hidden;
    
    h3{
        padding-left: 1rem;
        border-left: 5px solid var(--faint);
        &:last-of-type{
            margin-top: 2rem;
            margin-bottom: 1.5rem;
        }
    }
    ol{
        margin-left: 2rem;
        list-style-type:disc;
        
        li{
            
        }
    }
    .links{
        visibility: hidden;
        display: flex;
        align-items: center;
    }
    a{
        display: flex;
        align-items: center;
        color: var(--white);
        opacity: .7;
        padding: .2rem .5rem;
        border-radius: var(--radius);
        background: var(--faint);
        transition: all .5s ease-in-out;
        &:hover{
            opacity: 1;
        }
        &:hover svg{
            transform: rotateY(360deg);
        }
        &:first-of-type{
            margin-right: 1rem;
        }
        svg{
            color: var(--primary-1);
            margin-right: .5rem;
            transition: all 1s ease-in-out;
        }
    };

    .container{
        display: flex;
        width: 100%;
        @media screen and (max-width: 768px){
            flex-direction: column;
        }
 .image-container{
    box-shadow: 0 3px 6px rgba(255,255,255,0.16), 0 3px 6px rgba(255,255,255,0.23);
    border-radius: var(--radius);
    margin-bottom: 2rem;
    img{
        border-radius: var(--radius);
    }
 }
        .right, .left{
            flex: .5;
            margin: 3rem;
            @media screen and (max-width: 500px){
            margin: .5rem;
        }
        }
.stack{
    display: flex;
    flex-wrap: wrap;
    span{
        background: var(--primary-1);
        padding: .2rem .5rem;
        margin: 1rem 1rem 1rem 0;
        border-radius: var(--radius);
    }
}
    }
`

const ProjectTemplate = ({data}) => {
    const {Name,Stack,Summary, desc,livelink,screenshot,repo} = data.project;

    let project = useRef(null)
    
    let tl = new TimelineLite({ delay: .8});
    
    useEffect(() => {
        
     //Ref defs
     const h2 = project.children[0];
     const container = project.children[1]
     const left = container.children[0]
     const right = container.children[1]
     //left 
     const img = left.children[0]
     const links = left.children[1]
     const live = links.children[0]
     const github = links.children[1]

     //right
     const h3 = right.children[0]
     const stack = right.children[1]
     const summary = right.children[2]
     const motiv = right.children[3]
     const p1 = right.children[4]
     const p2 = right.children[5]
     const features = right.children[6]
     
      //Remove initial flash
      TweenMax.to(project, 0, {css: {visibility: 'visible'}})
      TweenMax.to(links, .1 ,{css: {visibility: 'visible'}})
      
     //coa button animations
     tl.from(h2, 1, {y: -80, ease: Power3.easeOut},'Start')
      tl.from(img, 1, {x: -1280, ease: Power3.easeOut},'Start')
      .from(links, 1, { x:-400, ease: Power3.easeOut})
      .from(github, 1.2, {opacity: 0, ease: Power3.easeOut}, .2,)
      .from(live, 1.4, {opacity:0, ease: Power3.easeOut}, .2,)
  
      //Content Animation
      tl.staggerFrom([h3, stack,summary,motiv,p1,p2,features
         ], 1, {
        x: 100,
        opacity:0,
        ease:Power3.easeOut,
        delay: .8
      }, .15, 'Start')
   
    
    }, [tl])
    return (
        <Layout>
            <SEO title={Name} description={desc}/>
            <StyledProject ref={el => project = el}>
                <h2 className='section-title'><span>{Name[0]}</span>{Name.substr(1)}</h2>
                <div className="container">
                    <div className="left">
                        <div className="image-container">
                            <Image fluid={screenshot.childImageSharp.fluid}/>
                        </div>
                        <div className="links">
                            <a href={livelink} target="_blank" rel="noopener noreferrer"> <BiLinkExternal/> Visit Project</a>
                            <a href={repo} target="_blank" rel="noopener noreferrer"><FaGithub/> Github Repo</a>

                        </div>
                    </div>
                    <div className="right"> 
                        <h3>Technologies used</h3>
                        <div className="stack">
                        {Stack.map(tech => <span key={tech.tech}>{tech.tech}</span>)}
                        </div>
                        <h3>Project Summary</h3>
                        <ReactMarkdown source={Summary}/>
                       
                    </div>
                </div>
            </StyledProject>
        </Layout>
    )
}
 // 
export const query = graphql`
  query GetSingleProject($slug: String) {
    project: strapiProjects(slug: { eq: $slug }) {
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
  `
export default ProjectTemplate
