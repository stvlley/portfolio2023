import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";
import Image from "next/image";

const aboutData = {
  firstName: "Stephen",
  lastName: "Talley",
  bithday: "December 24th",
  address: "Stafford, VA, USA",
  phn: "+77 022 155 02 02",
  email: "stephentalleyjr@gmail.com",
  linkedin_url: "https://linkedin.com/in/stephen-talley-the-developer",
  linkedin: "Stephen Talley | SWE",
  serviceLists: [
    "Fullstack Web Development",
    "UI/UX Desin and Implementation",
    "Data Analysis and Visualization",
    "Digital Marketing and Asset Curation",
    "Brand Strategy and Development",
  ],
  skills: {
    programming: [
      { name: "WordPress", value: "95" },
      { name: "JavaScript", value: "80" },
      { name: "Angular", value: "90" },
    ],
    language: [
      { name: "English", value: "95" },
      { name: "Russian", value: "80" },
      { name: "Arabic", value: "90" },
    ],
  },
  education: [
    { year: "2014 - 2016", unv: "Oxford Univercity", degree: "Master Degree" },
    { year: "2010 - 2014", unv: "Texas Univercity", degree: "Bachelor Degree" },
    { year: "2008 - 2010", unv: "Simone College", degree: "Associate Degree" },
  ],
  working: [
    {
      year: "2023 - now ",
      company: "Deutsche Post DHL Group",
      deg: "Operations Systems Analyst II",
    },
    { year: "2020 - 2023", company: "Telos Digital", deg: "Software Engineer" },
    { year: "2015 - 2019", company: "All Trade Contruction", deg: "Project Manager, Marketing Specialist" },
  ],
  techLogos: {
    image: [
      "/img/css.svg",
      "/img/html.svg",
      "/img/javascript-dark.svg",
      "/img/nextjs-light.svg",
      "/img/react-light.svg",
      "/img/tailwindcss-light.svg",
      "/img/rails.svg",
      "/img/python-light.svg",
    ],
    title: [
      "HTML",
      "CSS",
      "Javascipt",
      "Next.js",
      "React.js",
      "TailwindCSS",
      "Ruby on Rails",
      "Python",
    ]
  },
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <Image height={1000} width={1000} priority src="/img/thumbs/1-1.jpg" alt="" />
                <div className="main" data-img-url="img/profile.jpg" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                <p>
                  My name is <span>Stephen Talley.</span> {`I'm`} a software engineer and systems analyst with an obsession for building high-quality, data-driven software solutions. With expertise in both full-stack development using my favorite techs like <span>Javascript</span>, <span>Next.js</span>, <span>React.js</span>, <span>PostgreSQL</span>, <span>MongoDB</span> and systems analysis using <span>SQL</span> and modern <span>Business Intelligence</span> tools, I bring a critical perspective to every project I work on. The ability to break down digital products, applications, and systems into it&apos;s individual components and services allows me to gain a deep understanding of its nuances, advantages, and trade-offs. Technology is my life.
                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;