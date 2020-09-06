import React,{useEffect,useRef} from "react"

import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import SEO from "../components/SEO"

export default () => {
  

  return <Layout >
<SEO title='Home' />
 <Hero/>
  <Skills  />
 <Projects />
 <Blogs/>
 <Contact/>

  </Layout>
}
// ...GatsbyImageSharpFluid
