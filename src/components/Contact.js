import React from 'react';
import styled from 'styled-components'
import {navigate} from 'gatsby-link'
const StyledContact = styled.section`

position: relative;
max-width : 600px;
margin : 2rem auto;

@media screen and (max-width: 500px) {
  margin: .5rem;
}
.contact_container{
    display: flex;
    flex-direction: column;
    
}
    .contact__input{
  width: 100%;
  background: var(--faint);
  font-weight: 700;
  padding: 1rem;
  border-radius: .5rem;
  border:1px solid rgba(255,255,255,.05);
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
//
function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function Contact() {
  const [state, setState] = React.useState({name:'',email:'', message:'',bot:''})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
    console.log(e.target.value);
  }
console.log({state})
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }
    return (
        <StyledContact  data-aos = 'flip-down' id="contact">
           
                <h2 className="section-title"> <span>C</span>ontact</h2>

                <div className="contact__container ">
                   
                        <form method="post" onSubmit={handleSubmit}  netlify-honeypot="bot-field" data-netlify="true" name="contact" action='/success/'>
                        <input type="hidden" name="bot-field" onChange={handleChange} value={state.bot} />  
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="text" placeholder="Name" name='name' value={state.name} onChange={handleChange} className="contact__input"/>
                        <input type="email" placeholder="Email" name='email' value={state.email} onChange={handleChange} className="contact__input"/>
                        <textarea name="message" id="" cols="0" value={state.message} onChange={handleChange} rows="5" className="contact__input" placeholder='your message'></textarea>
                        <div type="submit" value="Send" className="theme_btn contact_button">Send</div>
                    </form>
                </div>
            </StyledContact>
    )
}

export default Contact
