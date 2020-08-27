import React from "react"
import styled from 'styled-components'
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blog from "../components/Blog"

const StyledBlogs = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const BlogsPage = ({data}) => {
  return <Layout>
    <StyledBlogs>
    {data.allStrapiBlogs.nodes.map(blog => <Blog blog={blog}/>)}
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
