import React from "react"
import styled from 'styled-components';
import logo from "../assets/logo.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { Link } from "gatsby";

const StyledNav = styled.div`
 
  position: absolute;
  top: 0;
  padding: 1rem 2rem;
  width: 100%;
  max-width: var(--max-width);
  margin : 0 auto; 
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 200;
  @media screen and (max-width: 800px) {
  height: 3rem;
  
}
  .logo{
   overflow: hidden;
  
  }
 
`
const Navbar = () => {
  return (
    <StyledNav>
    <div className="logo">
   <Link to='/'> <img src={logo} alt="watacle"/></Link>
    </div>
    <PageLinks/>
  </StyledNav>
  )
}

export default Navbar
