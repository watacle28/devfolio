import React,{useEffect} from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import About from '../components/About'
export default () => {
 
  return <Layout>
  <Hero/>
  <Skills/>
 <Projects/>
 <Blogs/>
 <Contact/>
  </Layout>
}
// ...GatsbyImageSharpFluid
