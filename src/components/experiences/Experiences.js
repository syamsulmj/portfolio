import React from 'react';

const Experiences = () => {

  return (
    <div className="experience">
      <div className="job-div">
        <div className="title">
          <span>Fullstack Software Engineer at Naluri Hidup Sdn. Bhd. — 2019 - Present</span>
        </div>
        <ul className="description">
          <div className="heading-description">
            <span>
              I was assigned to handle the Frontend and also the Backend of our company system. My job scope mostly involved in these field:
            </span>
          </div>
          <li>Creating multiple new API for the Frontend system</li>
          <li>Improve performance issues in the Backend and also Frontend system</li>
          <li>Design and Plan better infrastructure in code structure and also database structure wise of the existing system and for new features</li>
          <li>Maintaining and improving existing system by fixing bugs and improving the code structure to increase it readability level and also improving it in performance wise.</li>
          <li>Creating unit test for the code based and also creating a Postman test</li>
          <li>Delivering new requested features for the current system</li>
          <li>Change system’s structurized from relying based on ordering into slug unique name.</li>
          <div className="heading-description child">
            <span className="special">
              Technology Involved:
            </span>
          </div>
          <li>Elixir - (Phoenix Framework, distillery for deployment, Genserver)</li>
          <li>ReactJS - (Redux, Hooks, React-Rekit, Material-UI, Ant design)</li>
          <li>Postgres sql</li>
          <li>AWS - (S3 bucket, EC2 instance, Nginx)</li>
          <li>Firebase - (Dynamic link, Analytics)</li>
          <li>Github - (Circle CI)</li>
        </ul>
      </div>
      <div className="job-div">
        <div className="title">
          <span>Software Engineer (Software Graphics & Media Engineer) at Intel Malaysia — 2018 - 2019</span>
        </div>
        <ul className="description">
          <div className="heading-description">
            <span>
              Responsible in Android and Linux Kernel and also driver level development and debugging.<br/>
            </span>
            <span className="special">Accomplishment:</span>
          </div>
          <li>Bring up virtualised Android for Intel automotive platform. Which is using Android P as a guest OS for on top of Linux hypervisor.</li>
          <li>Deploy CoreU (Core User mode) backend and frontend driver inside virtualised Android and Linux hypervisor Service OS.</li>
          <li>Build script for Android.mk file and also shell script for compiling, replacing and also shell script for compiling, replacing and development testing.</li>
          <li>Sustaining and maintenance for Android Display, Graphics & Media which involved the Hardware Composer, Surface Flinger and media drivers.</li>
          <li>Implement fixes related to sepolicy, driver initialisation and defects.</li>
          <li>Ramp up on Video Acceleration API for decode and Video Post Processing.</li>
        </ul>
      </div>
      <div className="job-div">
        <div className="title">
          <span>Freelance Web Developer — 2016 - Present</span>
        </div>
        <ul className="description">
          <div className="heading-description">
            <span>
              Developed and done quite decent amount of maintaining job previously.
            </span>
            <span className="special">Development tools mostly involved:</span>
          </div>
          <li>Laravel</li>
          <li>PHP</li>
          <li>Javascript</li>
          <li>ReactJS</li>
          <li>IoT Projects</li>
          <li>Elixir (Phoenix Framework)</li>
        </ul>
      </div>
      <div className="job-div">
        <div className="title">
          <span>Software Internship (Web Maintainer) at Fave Malaysia — 2017</span>
        </div>
        <ul className="description">
          <div className="heading-description">
            <span>Was assigned to maintain their company's E-Commerce website and I was given a recognition in a team meeting for my excellent support.<br/></span>
            <span className="special">Expose to:</span>
          </div>
          <li>MVC STRUCTURE</li>
          <li>PHOENIX FRAMEWORK</li>
          <li>ELIXIR</li>
          <li>POSTGRES DB</li>
          <li>HTML SLIM</li>
          <li>SCSS</li>
          <li>SHELL SCRIPT</li>
          <li>GIT WORKFLOW</li>
          <li>RUBY</li>
        </ul>
      </div>
    </div>
  );
}

export default Experiences;
