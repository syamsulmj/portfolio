import React, { useState, Fragment } from 'react';
import { Row, Col } from 'antd';
import { getImagePath } from '../../lib/Helpers';
import ImageCarousel from './ImageCarousel';

const Projects = () => {
  const project1 = [
    {
      image: `${getImagePath()}/project-1/p-1.png`,
      mobileImage: true,
      title: "Voice Recognition for Smart Home System Using Intel Usquared IoT Board",
      description: (
        <Fragment>
          - Created an API to convert any voice command that has been received by the Micro Controller into a form of actions. The API will received the voice command and then it will find the keywords that matched with the registered device name and also the keywords for the actions whether to turning it on or off.
          <br/>
          - Created simple CRUD process to create new users account, new devices, edit users profiles, edit devices info, API for the the Micro controller to read new set of actions for the registered devices and deleting registered devices.
          <br/>
          - use Bootstrap framework for css
        </Fragment>
      )
    },
    {
      image: `${getImagePath()}/project-1/p-2.png`,
      mobileImage: true,
      title: "Voice Recognition for Smart Home System Using Intel Usquared IoT Board",
      description: "Users can add new devices in this views."
    },
    {
      image: `${getImagePath()}/project-1/p-3.png`,
      mobileImage: true,
      title: "Voice Recognition for Smart Home System Using Intel Usquared IoT Board",
      description: (
        <Fragment>
          - Using Onesignal to send notifications to user mobile when the system detected a security breach.
          <br/>
          - User have the ability to turn on or off devices manually from the web app or from voice recognition.
        </Fragment>
      )
    },
    {
      image: `${getImagePath()}/project-1/p-4.png`,
      mobileImage: true,
      title: "Voice Recognition for Smart Home System Using Intel Usquared IoT Board",
      description: "User profiles page that shows how many active devices"
    },
    {
      image: `${getImagePath()}/project-1/p-5.jpeg`,
      mobileImage: false,
      title: "Voice Recognition for Smart Home System Using Intel Usquared IoT Board",
      description: "Project prototype"
    }
  ]
  const project1Logo = `${getImagePath()}/laravel-logo.png`;

  return (
    <React.Fragment>
      <div className="projects">
        <Row className="custom-row">
          <Col span={12}>
            <ImageCarousel logo={project1Logo} slides={project1}/>
          </Col>
          <Col span={12}>lasdsaala</Col>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default Projects;
