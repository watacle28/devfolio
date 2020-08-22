import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
export default () => {
  return <Layout>
  <Hero/>
  <Skills/>
 <Projects/>
 <Contact/>
  </Layout>
}
// ...GatsbyImageSharpFluid
