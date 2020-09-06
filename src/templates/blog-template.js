import React ,{useEffect, useRef} from "react"
import { graphql, Link } from "gatsby"
import {TimelineLite ,TweenMax, Power3} from 'gsap';
import Image from 'gatsby-image'
import styled from 'styled-components';
import Layout from "../components/Layout"
 import 'prismjs/themes/prism-tomorrow.css'
 import Prism from 'prismjs'
import ReactMarkdown from "react-markdown"
import { FaBackward } from "react-icons/fa";
import SEO from "../components/SEO";

const StyledTemplate = styled.section`
    visibility: hidden;
    width: 100%;
   
    max-width: 800px;
    margin: 2rem auto;
    border: 1px solid var(--faint);
    border-radius:var(--radius);
    pre[class*="language-"] {
    background: #000;
    border-radius: var(--radius)
}
    img{
      border-radius: var(--radius);
    }
    .post-body{
      padding: 1rem;
    }
    .tags{
      position:initial;
      margin-bottom: 2rem;
    }
    .content{
      background: rgba(50,50,50,.1);
      padding: 1rem;
      border-radius: var(--radius)
    }
    .theme_btn{
      opacity: 0;
      display: block;
      width: max-content;
      margin: auto;
    }
`

const MyTemplate = ({data}) => {
  let blog = useRef(null)
   let btn = useRef(null) 
  let tl = new TimelineLite({ delay: .8});
 useEffect(() => {
   if(data && data.blog.content){
     Prism.highlightAll()
   }

    // //Ref defs
    const img = blog.children[0];
    const content = blog.children[1]
   
   console.log({btn});
    //  //Remove initial flash
      TweenMax.to(blog, 0, {css: {visibility: 'visible'}})
      // TweenMax.to(btn, 2, {css: {visibility: 'visible'}})
    
   
     tl.from(img, 1, {x: -1280, ease: Power3.easeOut},'Start')
     tl.from(btn, 1, {x:-1280, ease: Power3.easeOut},.2)
     tl.to(btn, 1.3, {opacity:1, ease: Power3.easeOut},.2)
    
    
    //  //Content Animation
     tl.staggerFrom([content.children[0],content.children[1],content.children[2],content.children[3]
        ], 1, {
       x: -1280,
       opacity:0,
       ease:Power3.easeOut,
       delay: .8
     }, .15, 'Start')
   
 }, [data && data.blog.content, tl])
  return <Layout>
    <SEO title={data.blog.title} description={data.blog.desc} article={data.blog.content}/>
    <StyledTemplate ref={el => blog = el}>
    <Image fluid={data.blog.image.childImageSharp.fluid}/>
   <div className="post-body">
   <h2>{data.blog.title}</h2>
  <div className="tags"> {data.blog.tags.map(tag => <span className='tag' key={tag.id}>{tag.tag}</span>)}</div>
   <blockquote className='blockquote'>{data.blog.desc}</blockquote>
   <ReactMarkdown className='content' source={data.blog.content}/>

   </div>
   
  <Link to='/#blog'><div ref={el => btn = el} className="theme_btn">Back</div></Link>
    </StyledTemplate>
   
  </Layout>
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      title
      desc
      tags {
        id
        tag
      }
      
    }
  }
`

export default MyTemplate
