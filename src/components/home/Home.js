import React, { useState, useEffect } from 'react';
import { Avatar, Row, Col } from 'antd';

const Home = () => {
  // const [shit, setShit] = useState("");
  // const [something, setSomething] = useState("");
  //
  // useEffect(() => {
  //   setSomething("Test");
  // }, [])
  //
  // useEffect(() => {
  //   if (shit !== " tester") {
  //     setShit(" tester");
  //   }
  // }, [shit])

  return (
    <div className="home">
      <div className="profile-picture">
        <Avatar size={200} icon="user" src="/images/profile-picture.jpg"/>
      </div>
      <div className="name">
        <span>Syamsul Mohd Jafri</span>
      </div>
      <div className="job">
        Full Stack Software Engineer
      </div>
      <div>
        <Row>
          <Col col={6}>Profile sadas as das dasd sa das d</Col>
          <Col col={6}>Experience dasd asd asd sad asd asd as sad </Col>
        </Row>
      </div>

    </div>
  )
}

export default Home;
