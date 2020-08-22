import React from "react"
import styled from 'styled-components';
import logo from "../assets/logo.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"

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

  /* background: var(--theme-bg-1); */
  .nav-center {
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
}
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-header img {
  margin-bottom: 0.375rem;
}
.toggle-btn {
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-5);
  cursor: pointer;
  transition: var(--transition);
}
.toggle-btn:hover {
  color: var(--clr-primary-2);
}
.nav-links {
  display: none;
}
@media screen and (min-width: 768px) {
  .toggle-btn {
    display: none;
  }
  .nav-links {
    display: flex;
    justify-content: flex-end;
  }
  .nav-links li {
    margin-right: 2rem;
  }
  .nav-links a {
    text-transform: capitalize;
    color: var(--clr-grey-1);
    font-weight: bold;
    letter-spacing: var(--spacing);
    transition: var(--transition);
    padding: 0.5rem 0;
  }
  .nav-links a:hover {
    color: var(--clr-primary-5);
    box-shadow: 0px 2px var(--clr-primary-5);
  }
  .nav-center {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
}

@media screen and (min-width: 992px) {
  .navbar {
    background: transparent;
  }
}
 
`
const Navbar = () => {
  return (
    <StyledNav>
    <img src={logo} alt="watacle"/>
    <PageLinks/>
  </StyledNav>
  )
}

export default Navbar
