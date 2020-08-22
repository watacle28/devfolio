import React from "react";
import styled from 'styled-components'
import Layout from "../components/Layout"

const StyledContact = styled.div` 
  .contact-page {
  display: grid;
  place-items: center;
  padding: 5rem 0;
}
.contact-form {
  background: var(--clr-white);
  border-radius: var(--radius);
  text-align: center;
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  width: 90vw;
  max-width: 35rem;
}
.contact-form:hover {
  box-shadow: var(--dark-shadow);
}
.contact-form h3 {
  padding-top: 1.25rem;
  color: var(--clr-grey-5);
}
.form-group {
  padding: 1rem 1.5rem;
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  margin-bottom: 1.25rem;
  background: var(--clr-grey-10);
  border-radius: var(--radius);
  text-transform: uppercase;
  letter-spacing: var(--spacing);
}
.form-control::placeholder {
  font-family: var(--ff-primary);
  color: var(--clr-grey-1);
  text-transform: uppercase;
  letter-spacing: var(--spacing);
}
.submit-btn {
  display: block;
  width: 100%;
  padding: 1rem;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
`
const contact = () => {
  return <Layout>contact page</Layout>
}

export default contact
