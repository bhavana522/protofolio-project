import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_STYLED_COMPONENTS from "../../assets/img/skills/styled-components.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_MSSQL from "../../assets/img/skills/mssql.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_C from '../../assets/img/skills/C.jpg'
import L_Java from '../../assets/img/skills/Java.jpg'

export const skills={

    frontend: [
        {
            link: "https://en.wikipedia.org/wiki/HTML5",
            imgAltText: "HTML 5",
            imgSrc: L_HTML5,
            skillName: "HTML5",
        },
        {
            link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
            imgAltText: "CSS 3",
            imgSrc: L_CSS3,
             skillName: "CSS3",
        },
        {
            link: "https://www.javascript.com/",
            imgAltText: "JavaScript",
            imgSrc: L_JAVASCRIPT,
            skillName: "JavaScript",
        },
        {
            link: "https://getbootstrap.com/",
            imgAltText: "Bootstrap",
            imgSrc: L_BOOTSTRAP,
            skillName: "Bootstrap",
          },
          {
            link: "https://reactjs.org/",
            imgAltText: "React JS",
            imgSrc: L_REACT,
            skillName: "React JS",
          },
          {
            link: "https://react-bootstrap.github.io/",
            imgAltText: "React Bootstrap",
            imgSrc: L_REACT_BOOTSTRAP,
            skillName: "React Bootstrap",
          },
          {
            link: "https://styled-components.com/",
            imgAltText: "styled-components",
            imgSrc: L_STYLED_COMPONENTS,
            skillName: "styled-components",
          },
    ],

    backend: [
        {
          link: "https://nodejs.org/en/",
          imgAltText: "Node.js",
          imgSrc: L_NODE_JS,
          skillName: "Node.js",
        },
        {
            link: "https://www.djangoproject.com/",
            imgAltText: "Django",
            imgSrc: L_DJANGO,
            skillName: "Django",
          },
    ],
    hostingPlatforms: [
        {
          link: "https://pages.github.com/",
          imgAltText: "GitHub Pages",
          imgSrc: L_GITHUB_PAGES,
          skillName: "GitHub Pages",
        },
      ],
      programmingLanguages: [
        {
          link: "https://www.javascript.com/",
          imgAltText: "JavaScript",
          imgSrc: L_JAVASCRIPT,
          skillName: "JavaScript",
        },
        {
          link: "https://www.python.org/",
          imgAltText: "Python",
          imgSrc: L_PYTHON,
          skillName: "Python",
        },
        {
            link: "https://www.java.com",
            imgAltText: "Java",
            imgSrc: L_Java,
            skillName: "Java",
          },
          {
            link: "https://en.wikipedia.org/wiki/C_(programming_language)",
            imgAltText: "C Programming",
            imgSrc: L_C,
            skillName: "C programming",
          },

    ],
    databases: [
        {
          link: "https://www.microsoft.com/en-us/sql-server/sql-server-2019",
          imgAltText: "MS-SQL",
          imgSrc: L_MSSQL,
          skillName: "MS-SQL",
        },     
      ],
}