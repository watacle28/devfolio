import React from "react";
import styled from 'styled-components'
import {TiHeartFullOutline} from 'react-icons/ti'
import SocialLinks from "../constants/socialLinks"
import Sidebar from "./Sidebar";

const StyledFooter = styled.div`
 
  height: 11rem;
 color: var(--theme-inactive);
 
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
p{
  span{
   
    svg{
      color: var(--primary-1)
    }
  }
  a{
   color: var(--white);
   transition: var(--transition);
   font-weight: 700;
   &:hover{
     color: var(--primary-1);
     opacity: .4;
   }
 }
}
`
const Footer = () => {
  return <StyledFooter>
   <SocialLinks />
<div className="copyright">
© <span> {new Date().getFullYear()}</span> watacle.dev
</div>
<p>Website built with <span ><TiHeartFullOutline/></span> by <a target ='_blank'  rel="noopener noreferrer" href="https://twitter.com/watacle28">Cleopas T. Wangayi</a> somewhere in Africa</p>
<Sidebar/>
  </StyledFooter>
}

export default Footer
