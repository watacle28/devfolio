import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
// import 'prismjs/themes/prism-twilight.css'
import ReactMarkdown from "react-markdown"


const MyTemplate = ({data}) => {
  console.log({data});
  return <Layout>
    <h2>{data.blog.title}</h2>
    <img src={data.blog.image.childImageSharp.fluid.src}/>
    <ReactMarkdown source={data.blog.content}/>
  
   
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
      tags {
        id
        tag
      }
      
    }
  }
`

export default MyTemplate
