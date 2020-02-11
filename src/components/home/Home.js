import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { Avatar, Icon, Row, Col } from 'antd';
import { getRealRoute } from '../../lib/Helpers';

const Home = (props) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [displaySkills, setDisplaySkills] = useState(false);

  const getSkills = () => {
    if (!isMobile || displaySkills) {
      return null;
    }
    if (window.scrollY > 120 && !displaySkills) {
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
  }, [scrollTop, displaySkills]);

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
              and I also have a strong base in data structure and programming algorithm.
            </div>
            <div className="title child">
              <span>Experience</span>
            </div>
            <div className="description">
              <ul>
                <li>Fullstack Software Engineer at Naluri Hidup Sdn. Bhd.</li>
                <li>Software Engineer (Software Graphics & Media Engineer) at Intel malaysia</li>
                <li>Freelance Web Developer</li>
                <li>Software Internship (web maintainer) at Fave Malaysia</li>
              </ul>
              <div className="custom-button">
                <Link to="/experiences" className="btn" onClick={() => props.changeNavbarActive("experiences")}>
                  See more details
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
                <span className="skill-70">
                  <span className="range r-70">70%</span>
                </span>
                <em>Elixir</em>
              </li>
              <li>
                <span className="skill-70">
                  <span className="range r-70">70%</span>
                </span>
                <em>Phoenix Framework</em>
              </li>
              <li>
                <span className="skill-60">
                  <span className="range r-60">60%</span>
                </span>
                <em>PHP</em>
              </li>
              <li>
                <span className="skill-60">
                  <span className="range r-60">60%</span>
                </span>
                <em>Laravel</em>
              </li>
              <li>
                <span className="skill-50">
                  <span className="range r-50">50%</span>
                </span>
                <em>Javascript</em>
              </li>
              <li>
                <span className="skill-50">
                  <span className="range r-50">50%</span>
                </span>
                <em>React.JS</em>
              </li>
              <li>
                <span className="skill-50">
                  <span className="range r-50">50%</span>
                </span>
                <em>Shell Script</em>
              </li>
              <li>
                <span className="skill-50">
                  <span className="range r-50">50%</span>
                </span>
                <em>Linux</em>
              </li>
              <li>
                <span className="skill-70">
                  <span className="range r-70">70%</span>
                </span>
                <em>HTML5</em>
              </li>
              <li>
                <span className="skill-70">
                  <span className="range r-70">70%</span>
                </span>
                <em>CSS/SASS</em>
              </li>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default Home;
