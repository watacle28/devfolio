import React from "react";
import styled from 'styled-components';
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

deckDeckGoHighlightElement();
const StyledLayout = styled.main` 
 max-width: var(--max-width);
 margin : 0 auto; 

 overflow-x: hidden;
 .children{
  min-height: calc(100vh - 5rem - 11rem);
 
 }
  `


const Layout = ({ children }) => {
  return (
    <StyledLayout>
     <Navbar/>
     {/* <Sidebar/> */}
   <div className="children">
     {children}
   </div>
     <Footer/>
    </StyledLayout>
  )
}

export default Layout
