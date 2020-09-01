import React ,{useEffect} from "react"
import { graphql, Link } from "gatsby"
import Image from 'gatsby-image'
import styled from 'styled-components';
import Layout from "../components/Layout"
 import 'prismjs/themes/prism-tomorrow.css'
 import Prism from 'prismjs'
import ReactMarkdown from "react-markdown"
import { FaBackward } from "react-icons/fa";

const StyledTemplate = styled.section`
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
      display: block;
      width: max-content;
      margin: auto;
    }
`

const MyTemplate = ({data}) => {
 useEffect(() => {
   if(data && data.blog.content){
     Prism.highlightAll()
   }
 }, [data && data.blog.content])
  return <Layout>
    <StyledTemplate>
    <Image fluid={data.blog.image.childImageSharp.fluid}/>
   <div className="post-body">
   <h2>{data.blog.title}</h2>
  <div className="tags"> {data.blog.tags.map(tag => <span className='tag' key={tag.id}>{tag.tag}</span>)}</div>
   <blockquote className='blockquote'>{data.blog.desc}</blockquote>
   <ReactMarkdown className='content' source={data.blog.content}/>

   </div>
   
  <Link to='/#blog'><div className="theme_btn">Back</div></Link>
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
