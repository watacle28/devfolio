import React from "react";
import styled from 'styled-components'
import {TiHeartFullOutline} from 'react-icons/ti'
import SocialLinks from "../constants/socialLinks"
import Sidebar from "./Sidebar";

const StyledFooter = styled.div`
 
  height: 11rem;
 overflow: hidden;
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
    color: var(--primary-1);
   transition: var(--transition);
   font-weight: 700;
   &:hover{
     
     opacity: .4;
   }
 }
}
`
const Footer = () => {
  return <StyledFooter>
   <SocialLinks />
<div className="copyright">
© <span> {new Date().getFullYear()}</span> watacle
</div>
<p>Website built with <span ><TiHeartFullOutline/></span> by <a target ='_blank'  rel="noopener noreferrer" href="https://twitter.com/watacle28"> Cleopas T. Wangayi </a><br/></p>
{/* using <a href="http://gatsby.org" target="_blank" rel="noopener noreferrer">Gatsby</a> */}
<Sidebar/>
  </StyledFooter>
}

export default Footer
