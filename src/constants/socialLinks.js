import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/cwangayi",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/cleopas-tawanda-wangayi-103a93109/",
  },
  {
    id: 3,
    icon: <FaDribbbleSquare className="social-icon"></FaDribbbleSquare>,
    url: "https://www.dribbble.com/watacle",
  },
  {
    id: 4,
    icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
    url: "https://www.behance.net/sirwatacle1628",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com/watacle28",
  },
]
const links = data.map(link => {
  return (
    <li className='social_icon' key={link.id}>
      <a href={link.url} >
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
