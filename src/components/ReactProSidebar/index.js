import React, { Component } from "react"
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const sidebar = <ProSidebar>
  <Menu iconShape="square">
    <MenuItem>Dashboard</MenuItem>
    <SubMenu title="Components">
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>;

class ReactProSidebar extends Component {

  render() {
    return (
      <div>
        {sidebar}
      </div>
    );
  }
}

export default ReactProSidebar;