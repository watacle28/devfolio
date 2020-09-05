import React, {useRef,useEffect} from "react"
import styled from 'styled-components'
import {TimelineLite ,TweenMax, Power3} from 'gsap';
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blog from "../components/Blog"

const StyledBlogs = styled.section`
  visibility: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

`
const BlogsPage = ({data}) => {
  let blog = useRef(null) 
  let title = useRef(null)
  let tl = new TimelineLite({ delay: .8});

 useEffect(() => {
  
    // //Ref defs

      //Remove initial flash
      TweenMax.to(blog, 0, {css: {visibility: 'visible'}})
    
   
     tl.from(title, 1, {y: -1280, ease: Power3.easeOut},'Start')
    
    //  //Content Animation
     tl.staggerFrom([blog.children[2],blog.children[1],blog.children[0]
        ], 1, {
       x: -1280,
       opacity:0,
       ease:Power3.easeOut,
       delay: .8
     }, -.15, 'Start')
   
 }, [])
  return <Layout>
    <h2  ref={el => title = el} className='section-title'><span>B</span>log</h2>
    <StyledBlogs data-aos='fade-up' ref={el => blog = el}>
    {data.allStrapiBlogs.nodes.map(blog => <Blog  blog={blog}/>)}
    </StyledBlogs>
  </Layout>
}
export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
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
        slug
        created_at
        tags {
          id
          tag
        }
      }
    }
  }
`

export default BlogsPage
