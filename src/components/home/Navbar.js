import React from "react";
import { Link } from 'react-router-dom';
import { Menu, Icon } from "antd";

const Navbar = (props) => {
  return (
    <Menu
      onClick={props.handleNavbarClick}
      selectedKeys={props.current}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="none">
        <Icon type="api" />
        Syamsul MJ
      </Menu.Item>
      <Menu.Item key="home">
        <Link to="/">
          <Icon type="home" />
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="experiences">
        <Link to="/experiences">
          <Icon type="area-chart" />
          Experiences
        </Link>
      </Menu.Item>
      <Menu.Item key="projects">
        <Link to="/projects">
          <Icon type="project" />
          Projects
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default Navbar;
