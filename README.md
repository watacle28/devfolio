This repository, named "devfolio", is a personal web portfolio project created by the user "watacle28". The project is built using Gatsby.js, a popular React-based framework for building static websites and web applications.

Main Function Points
Provides a personal web portfolio showcasing the developer's work and skills
Utilizes Gatsby.js for building a static website with React components
Integrates with Strapi, a headless CMS, to manage the content of the portfolio
Includes various components such as a home page, about page, project page, and blog page
Implements styling using CSS and React Icons for visual elements
Deployed on Netlify, a popular hosting platform for static websites
Technology Stack
Gatsby.js: A React-based framework for building static websites and web applications
Strapi: A headless CMS used to manage the content of the portfolio
React: A JavaScript library for building user interfaces
CSS: Used for styling the website
React Icons: A library of customizable icons for React applications
License
The project is licensed under the MIT license, which is a permissive open-source license that allows for free use, modification, and distribution of the software.

## Setup Notes

1. All components ready to go (including imports)
2. Use main.css - less imports
3. Limit amount of components - better overview
4. React Icons

[react icons] :https://react-icons.github.io/react-icons/

```javascript
import { FaHome } from "react-icons/fa"
const Component = () => {
  return <FaHome className="icon"></FaHome>
}
```

5. Use constants to avoid repetition.
6. In order to follow along with the video use my backend (url below)

   [strapi backend]:https://github.com/john-smilga/strapi-gatsby-porfolio-2020-api

7. Make sure such content-types exist in your Strapi application. Or replace/delete them in gatsby-config.js

```javascript
{
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        // contentTypes: [`jobs`, `projects`, `blogs`, ],
        //singleTypes:[`about` ]
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
```
