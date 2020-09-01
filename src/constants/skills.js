import React from 'react';
import { DiReact,DiNodejsSmall,DiHtml5,DiCss3,DiJavascript, DiMongodb, DiHeroku, DiGithub, DiBootstrap } from "react-icons/di"
import {GrGraphQl} from 'react-icons/gr';
import {SiPostman, SiVisualstudiocode, SiJsonwebtokens, SiVueDotJs,SiFirebase, SiStrapi, SiGatsby, SiRedux, SiApollographql, SiStyledComponents, SiMaterialUi, SiNextDotJs} from 'react-icons/si'
export const frontEndSkills = [
    {name: 'HTML', icon: <DiHtml5/>, percent: 90},
    {name: 'Javascript', icon: <DiJavascript/>, percent: 70},
    {name: 'CSS3', icon: <DiCss3/>, percent: 90},
    {name: 'React', icon: <DiReact/>, percent: 80},
    {name: 'Vue', icon: <SiVueDotJs/>, percent: 30}
    
]

export const BackEndSkills = [

    {name: 'NodeJs', icon: <DiNodejsSmall/>, percent: 80},
    {name: 'MongoDb', icon: <DiMongodb/>, percent: 70},
    {name: 'GraphQl', icon: <GrGraphQl/>, percent: 60},
    
    {name: 'FireBase', icon: <SiFirebase/>, percent: 50},
   {name: 'RestFul APIs', percent: 85}
]

export const BackEndTools = [
    {name: 'PostMan', icon: <SiPostman/>},
    {name: 'Heroku', icon: <DiHeroku/> },
    {name: 'VS Code', icon: <SiVisualstudiocode/>},
    {name: 'GitHub', icon: <DiGithub/>},
    {name: 'insomnia'},
    {name: 'Json Web Tokens', icon: <SiJsonwebtokens/>},
    {name: 'Strapi', icon: <SiStrapi/>},
    {name: 'ExpressJs'},
]

export const frontEndTools = [
    {name: 'Redux', icon: <SiRedux/>},
    {name: 'Apollo', icon: <SiApollographql/>},
    {name: 'Styled Components', icon: <SiStyledComponents/>},
    {name: 'Bootstrap', icon: <DiBootstrap/>},
    {name: 'Material UI', icon: <SiMaterialUi/>},
    {name: 'Gatsby', icon: <SiGatsby/>, percent: 80},
    {name: 'NextJs', icon:<SiNextDotJs/>}
] 