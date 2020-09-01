import React from "react";
import styled from 'styled-components'
import Title from "./Title"
import Blog from "./Blog"
import { Link, useStaticQuery, graphql } from "gatsby"

const StyledBlogs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
 justify-content: center;
 .posts{
  display: flex;
  width: 100%;
 justify-content: center;
 margin-bottom: 2rem;
 }
 .theme_btn{
   width: max-content;
   margin: 0 auto;
   opacity: .5;
   a{
     color: var(--theme-white);
   }
 }
`
export const Blogs = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiBlogs(limit: 3, sort: {fields: created_at, order: DESC}) {
        nodes {
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          created_at
          id
          desc
          content
          slug
          tags{
            id
            tag
          }
          
        }
      }
    }
  `)
 
  return    (
     <StyledBlogs id='blog' className='section'> 
    <h2 className='section-title'><span>L</span>atest <span>B</span>log <span>P</span>osts</h2>
<div className="posts">
{data.allStrapiBlogs.nodes.map(blog => <Blog blog={blog}/>)}
</div>
<div className="theme_btn"> <Link to='/blog'>  See All Posts</Link></div>
  </StyledBlogs> 
  )
 

}
export default Blogs
