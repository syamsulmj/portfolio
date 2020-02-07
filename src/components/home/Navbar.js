import React from "react";
import { Menu, Icon } from "antd";

// const { SubMenu } = Menu;

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
        <a href="/">
          <Icon type="home" />
          Home
        </a>
      </Menu.Item>
      <Menu.Item key="projects">
        <a href="/projects">
          <Icon type="project" />
          Projects
        </a>
      </Menu.Item>
    </Menu>
  );
}

export default Navbar;
