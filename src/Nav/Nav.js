/*
 * @Descripttion:
 * @version: 3.0
 * @Author: symbolSong
 * @Date: 2020-05-29 16:31:45
 * @LastEditors: symbolSong
 * @LastEditTime: 2020-05-29 17:52:34
 */

import { Layout, Menu, Breadcrumb, Button } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React, { Component } from "react";
import "antd/dist/antd.css";
import logo from "../logo.svg";
import "./Navi.css";
import router from "../router/index";
import { Route, NavLink, Switch } from "react-router-dom";
import User from "../demo/User";
const { Header, Content, Footer, Sider } = Layout;

class Nav extends Component {
  state = {
    collapsed: false,
    mode: "inline",
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<AppstoreOutlined />}>
            <span className="nav-text"> 
                <NavLink to='/home'>home</NavLink>
              </span>
            </Menu.Item>
            <Menu.Item key="2" icon={<MailOutlined />}>
              <span className="nav-text"> 
                <NavLink to='/new'>new</NavLink>
              </span>
            </Menu.Item>
            <Menu.Item key="3" icon={<SettingOutlined />}>
            <span className="nav-text"> 
                <NavLink to='/phone'>phone</NavLink>
              </span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#000", padding: 0 }}>
            <span
              style={{ color: "#fff", paddingLeft: "2%", fontSize: "1.4em" }}
            >
              <Button
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={this.toggle}
                style={{ cursor: "pointer" }}
              />
            </span>
            <span
              style={{ color: "#fff", paddingLeft: "2%", fontSize: "1.4em" }}
            >
              Information Management System
            </span>
            <span style={{ color: "#fff", float: "right", paddingRight: "1%" }}>
              <img src={logo} className="App-logo" alt="logo" />
            </span>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "12px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 780 }}>
              <Switch>
                {router.map(
                  ({ path, componentName, exact = true, routes = [] }, key) => {
                    return (
                      <Route
                        exact={exact}
                        key={key}
                        path={path}
                        component={componentName}
                        // render={(props) => (
                        //   //主要是为了传递嵌套路由到子组件
                        //   //类似于 <User {...props} routes={routes} />
                        //   <componentName {...props} routes={routes} />
                        // )}
                      />
                    );
                  }
                )}
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Nav;
