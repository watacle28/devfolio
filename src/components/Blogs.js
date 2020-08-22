import React from "react";
import styled from 'styled-components'
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"

const StyledBlogs = styled.div` 
  .blog {
  display: block;
  margin-bottom: 2rem;
  background: var(--clr-grey-10);
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: var(--transition);
}
.blog:hover {
  box-shadow: var(--dark-shadow);
  transform: scale(1.02);
}
.blog article {
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
}
.blog-card {
  display: grid;
  grid-template-rows: auto 1fr auto;
}
.blog-img {
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  height: 15rem;
}
.blog-card {
  padding: 1.5rem 1rem;
}
.blog-card h4 {
  color: var(--clr-grey-1);
}

.blog-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.blog-footer p {
  margin-bottom: 0;
  font-weight: bold;
  color: var(--clr-grey-5);
}
.blog-footer p:first-of-type {
  display: inline-block;
  background: var(--clr-grey-9);
  color: var(--clr-grey-5);
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.85rem;
}
@media screen and (min-width: 576px) {
  .blogs-center {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
    column-gap: 2rem;
  }
  .blog-img {
    height: 17.5rem;
  }
}
@media screen and (min-width: 850px) {
  .blog-img {
    height: 13.75rem;
  }
}
`
export const Blogs = () => {
  return <h2>blog list section</h2>
}
export default Blogs
