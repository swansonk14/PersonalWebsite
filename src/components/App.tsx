import { Icon, Layout } from "antd";
import Menu from "antd/es/menu";
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import PublicationsPage from "./PublicationsPage";
import NamePage from "./NamePage";
import ProjectsPage from "./ProjectsPage";
import CVPage from "./CVPage";

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
                <Link to="/">About Me</Link>
              </Menu.Item>
              <Menu.Item key="publications">
                <Link to="/publications">Publications</Link>
              </Menu.Item>
              <Menu.Item key="cv">
                <Link to="/cv">CV</Link>
              </Menu.Item>
              <Menu.Item key="projects">
                <Link to="/projects">Other Projects</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{minHeight: "calc(100vh - 134px)" }}>
            <Route exact path="/" component={NamePage} />
            <Route path="/publications" component={PublicationsPage} />
            <Route path="/cv" component={CVPage} />
            <Route path="/projects" component={ProjectsPage} />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <span><a href="mailto:swansonk.14@gmail.com"><Icon type="mail" /> Email</a></span>
            <span><a href="https://github.com/swansonk14"><Icon type="github" /> GitHub</a></span>
            <span><a href="https://linkedin.com/in/kyle-swanson-564ab787"><Icon type="linkedin" /> LinkedIn</a></span>
            {/* TODO: Google Scholar and Orcid */}
            <p>© 2019 Kyle Swanson. <a href="https://github.com/swansonk14/PersonalWebsite">Source Code</a></p>
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
