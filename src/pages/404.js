import React from "react"
import styled from 'styled-components';
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const StyledError = styled.section`
    display: grid;
    place-items: center;
    h1{
      font-size: 15rem;
    }
    p{
      font-size: 2rem;
      margin-bottom: 2rem;
    }
   `

const Error = () => {
  return <Layout><StyledError>
    <h1>404</h1>
    <p>You are in the endgame mate , not safe at all</p>
    <Link to='/'><div className="theme_btn">Go back Home</div></Link> 
    </StyledError></Layout>
}

export default Error
