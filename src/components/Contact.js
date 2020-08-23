import React from 'react';
import styled from 'styled-components'

const StyledContact = styled.section`
position: relative;
max-width : 600px;
margin : 2rem auto;
.contact_container{
    display: flex;
    flex-direction: column;
    
}
    .contact__input{
  width: 100%;
  background: transparent;
  font-weight: 700;
  padding: 1rem;
  border-radius: .5rem;
  border:var(--theme-border);
  outline: none;
  margin-bottom:1rem;
  color: var(--white);
}
.contact_button{
 
  margin-left: auto;
}
.bg-title{
    position: absolute;
    margin-top: 0;
    top:50%;
    opacity: .02;
    font-size: 5rem;
    font-weight: 900;
    width: 100%;
    text-align:center;
  
    
}
`

function Contact() {
    return (
        <StyledContact id="contact">
           
                <h2 className="section-title"> <span>C</span>ontact</h2>

                <div className="contact__container ">
                    <form action="" className="contact__form">
                        <input type="text" placeholder="Name" className="contact__input"/>
                        <input type="mail" placeholder="Email" className="contact__input"/>
                        <textarea name="" id="" cols="0" rows="5" className="contact__input" placeholder='your message'></textarea>
                        <div type="button" value="Send" className="theme_btn contact_button">Send</div>
                    </form>
                </div>
            </StyledContact>
    )
}

export default Contact