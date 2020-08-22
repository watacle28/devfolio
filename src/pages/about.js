import React from "react";
import styled from 'styled-components'
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"

const StyledAbout = styled.div`
  .about-page {
  padding: 7rem 0;
}
.about-img {
  margin-bottom: 2rem;
  height: 25rem;
}
.about-text .section-title {
  margin-bottom: 2rem;
  text-align: left;
}
.about-text .underline {
  margin-left: 0;
  margin-right: 0;
}
.about-text p {
  line-height: 2;
}
.stack-container {
  width: 30rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 0.5rem;
}
.stack-container span {
  text-transform: uppercase;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  color: var(--clr-grey-4);
}
.stack-icon {
  color: var(--clr-primary-5);
  margin-right: 0.25rem;
  font-size: 1rem;
}
@media screen and (min-width: 992px) {
  .about-center {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    column-gap: 4rem;
  }
  .about-img {
    grid-column: 1 / span 5;
    margin-bottom: 0;
  }
  .about-text {
    grid-column: 6 / -1;
  }
}
`
// ...GatsbyImageSharpFluid
const About = () => {
  return <Layout>about page</Layout>
}

export default About
