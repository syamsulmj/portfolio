import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { Avatar, Icon, Row, Col } from 'antd';
import { getRealRoute } from '../../lib/Helpers';

const Home = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [displaySkills, setDisplaySkills] = useState(false);

  const getSkills = () => {
    if (!isMobile || displaySkills) {
      return null;
    }
    if (window.scrollY > 135 && !displaySkills) {
      setDisplaySkills(true);
      return null;
    }
    return "vanished";
  }

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    
    if (!displaySkills) {
      window.addEventListener("scroll", onScroll);
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <React.Fragment>
      <div className="home">
        <div className="profile-picture">
          <Avatar size={125} icon="user" src={getRealRoute() === "portfolio" ? `/portfolio/images/profile-picture.jpg` : `/images/profile-picture.jpg`}/>
        </div>
        <div className="name">
          <span>Syamsul Mohd Jafri</span>
        </div>
        <div className="job">
          Full Stack Software Engineer
        </div>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/syamsul-mohd-jafri-3370a1158/" target="_blank" rel="noopener noreferrer">
            <span>
              <Icon type="linkedin"></Icon>
            </span>
          </a>
          <a href="https://github.com/syamsulmj" target="_blank" rel="noopener noreferrer">
            <span>
              <Icon type="github"></Icon>
            </span>
          </a>
          <a href="mailto:syamsulmj94@gmail.com" target="_blank" rel="noopener noreferrer">
            <span>
              <Icon type="mail"></Icon>
            </span>
          </a>
        </div>
      </div>
      <div className="about-me">
        <Row className="custom-row">
          <Col span={12}>
            <div className="title">
              <span>About me</span>
            </div>
            <div className="description">
              I am an ambitious, extra hardworking, committed and a self-taught person.
              I have a vast knowledge in programming skills. My specialities field are more into web development
              and also have a pretty strong base in programming logics.
            </div>
            <div className="title child">
              <span>Experience</span>
            </div>
            <div className="description">
              <ul>
                <li>Fullstack Software Engineer at Naluri Hidup Sdn. Bhd.</li>
                <li>Software Engineer (Software Graphics & Media Engineer) at Intel malaysia</li>
                <li>Freelance Web Developer</li>
                <li>Software Internship (web maintainer) in fave Malaysia</li>
              </ul>
              <div className="custom-button">
                <Link to="/projects" className="btn">
                  Get more details
                  <Icon type="double-right"></Icon>
                </Link>
              </div>
            </div>
          </Col>
          <Col span={12} className={`custom-col ${getSkills()}`}>
            <div className="title">
              <span>Technology used</span>
            </div>
            <div className="skills">
              <li>
                <span className="skill-70"></span><em>Elixir</em>
              </li>
              <li>
                <span className="skill-70"></span><em>Phoenix Framework</em>
              </li>
              <li>
                <span className="skill-60"></span><em>PHP</em>
              </li>
              <li>
                <span className="skill-60"></span><em>Laravel</em>
              </li>
              <li>
                <span className="skill-50"></span><em>Javascript</em>
              </li>
              <li>
                <span className="skill-50"></span><em>React.JS</em>
              </li>
              <li>
                <span className="skill-50"></span><em>Shell Script</em>
              </li>
              <li>
                <span className="skill-50"></span><em>Linux</em>
              </li>
              <li>
                <span className="skill-70"></span><em>HTML5</em>
              </li>
              <li>
                <span className="skill-70"></span><em>CSS/SASS</em>
              </li>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default Home;
