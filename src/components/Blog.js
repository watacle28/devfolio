import React from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"
import Image from "gatsby-image"
import dayjs from 'dayjs';
import { Link } from "gatsby"

const StyledBlog = styled.div`
min-width: 300px;
flex: calc(1 / 3);
margin: 2rem;
 .card {
  position: relative;
  height: 350px;
  box-shadow: 0 0 20px rgba(var(--theme-white),0.1);
  border: 1px solid var(--faint);
  border-radius:var(--radius);
  margin: 0 1rem;
  overflow: hidden;
  transition: all .5s ease-in-out;
	&:hover{
		
		opacity: 0.6;
		transform: scale(1.05);
		z-index: 20;

	}

}

.card__date {
	background: var(--primary-1);
	position: absolute;
	top: 20px;
	right: 20px;
	width: 45px;
	height: 45px;
	border-radius: 50%;
	color: var(--theme-white);
	text-align: center;
	line-height: 13px;
	font-weight: bold;
	padding-top: 10px;
	&__day {
		display: block;
		font-size: 14px;
	}

	&__month {
		display: block;
		font-size: 10px;
		text-transform: uppercase;
	}
}



.card__thumb{
	height: 200px;
	overflow: hidden;
	background-color: var(--theme-white);
 .img__container{
   position:relative;
   height: 100%;
 
   img{
   
    object-fit:cover;
	transition: all .5s ease-in-out;
    transform: scale(1);
    
	}
 
	
 }
}



.card__body {
	position: relative;
	padding: 20px;
	

}



.card__title {
	padding: 0 0 10px 0;
	margin: 0;
	font-weight: bold;
}

.card__description {
color: white;
opacity: .6;
	
	
}

.theme_btn_secondary{
  display: inline-block;
  transition: all .5s linear;
  font-weight: 700;
  letter-spacing: 1.5px;
}


`
const Blog = ({blog}) => {
  console.log({blog});
  return <StyledBlog>
          <article className="card">
		<header className="card__thumb">
		<div className="img__container">
    <Link to={`/blogs/${blog.slug}`}>
      <Image fluid={blog.image.childImageSharp.fluid}/>
     </Link>
			<div className="tags">	{blog.tags.map(tag => 	<div key={tag.id} className="tag">{tag.tag || 'code'}</div>)}</div>
    </div>
		</header>
		<div className="card__date">
<span className="card__date__day">{dayjs(blog.created_at).format('DD')}</span>
			<span className="card__date__month">{dayjs(blog.created_at).format('MMM')}</span>
		</div>
		<div className="card__body">
	
			<div className="card__title">{blog.title}</div>
	
<p className="card__description"> {blog.desc && blog.desc}</p>
      <Link to={`/blogs/${blog.slug}`}>
      <div className="theme_btn_secondary">
      Read More . . .
    </div>
      </Link>
		</div>
	
	</article>
         </StyledBlog>
}

Blog.propTypes = {}

export default Blog
