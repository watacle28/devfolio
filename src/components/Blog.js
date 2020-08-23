import React from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

const StyledBlog = styled.div`
flex: calc(1 / 3);
 .card {
  position: relative;
  height: 350px;
  box-shadow: 0 0 20px rgba(var(--theme-white),0.1);
  border: var(--theme-border);
  border-radius:var(--radius);
  margin: 0 1rem;
	&:hover .img__container img{
		
		opacity: 0.6;
		transform: scale(1.2);

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
    opacity: 1;
    object-fit:cover;
		transition: opacity .5s, transform .5s;
    transform: scale(1);
    
	}
  .tags{
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;

.tag {
	height: 25px;
	padding: 0 15px;
	background: var(--primary-1);
	color: var(--theme-white);
  margin-right:1rem;
  border-radius: var(--radius);
  opacity: .5;
	
}
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
color: var(--theme-inactive)
	
	
}

.theme_btn_secondary{
  display: inline-block;
  transition: all .5s linear;
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
			<span className="card__date__day">23</span>
			<span className="card__date__month">Aug</span>
		</div>
		<div className="card__body">
	
			<div className="card__title">{blog.title}</div>
	
<p className="card__description"> {blog.desc && blog.desc}</p>
      <Link to={`/blogs/${blog.slug}`}>
      <div className="theme_btn_secondary">
      Read More
    </div>
      </Link>
		</div>
	
	</article>
         </StyledBlog>
}

Blog.propTypes = {}

export default Blog
