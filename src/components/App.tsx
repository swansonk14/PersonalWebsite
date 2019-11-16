import { Icon, Layout } from "antd";
import Menu from "antd/es/menu";
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import ExperiencePage from "./ExperiencePage";
import HobbiesPage from "./HobbiesPage";
import NamePage from "./NamePage";
import ProjectsPage from "./ProjectsPage";

import "./App.scss";

const { Header, Content, Footer } = Layout;

class App extends Component {

  public handleClick = (e: any) => {
    this.setState({
      current: e.key,
    });
  }

  public render() {
    return (
      <Router>
        <Layout>
          <Header style={{position: "fixed", width: "100%"}}>
            <Menu onClick={this.handleClick} selectedKeys=
                  {[window.location.pathname === "/" ? "name" : window.location.pathname.split("/").join("")]}
                mode="horizontal" className="Menu" style={{ lineHeight: "40px" }}>
              <Menu.Item key="name">
                <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
              </Menu.Item>
              <Menu.Item key="experience">
                <Link to={`${process.env.PUBLIC_URL}/experience`}>Experience</Link>
              </Menu.Item>
              <Menu.Item key="projects">
                <Link to={`${process.env.PUBLIC_URL}/projects`}>Projects</Link>
              </Menu.Item>
              <Menu.Item key="hobbies">
                <Link to={`${process.env.PUBLIC_URL}/hobbies`}>Hobbies</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{minHeight: "calc(100vh - 134px)" }}>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={NamePage} />
            <Route path={`${process.env.PUBLIC_URL}/experience`} component={ExperiencePage} />
            <Route path={`${process.env.PUBLIC_URL}/projects`} component={ProjectsPage} />
            <Route path={`${process.env.PUBLIC_URL}/hobbies`} component={HobbiesPage} />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <span><a href="jmmichel@csail.mit.edu"><Icon type="mail" /></a></span>
            <span><a href="https://www.linkedin.com/in/jesse-michel-a5467693/"><Icon type="linkedin" /> </a></span>
            <p>© 2019 <a>Jesse Michel</a> and <a>Zack Holbrook</a></p>
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
