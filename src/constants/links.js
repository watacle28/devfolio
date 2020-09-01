import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

const StyledPageLinks = styled.ul`  
    display: flex;
   li{
     border: none;
   
      a{
        color: var(--white);
        font-family: var(--ff-primary);
        transition: var(--transition);
      }
    }
`

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "skills",
    url: "#skills",
  },
  {
    id: 3,
    text: "projects",
    url: "#projects",
  },
  {
    id:4,
    text: "about me",
    url: "/about"
  },
  {
    id: 5,
    text: "blog",
    url: "#blog",
  },
  {
    id: 6,
    text: "contact",
    url: "#contact",
  },
]

const tempLinks = data.map(link => {
  return (
    <li className='theme_btn' key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})


export default ({ styleClass }) => {
  return (
    <StyledPageLinks className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </StyledPageLinks>
  )
}
