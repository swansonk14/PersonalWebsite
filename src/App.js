import './App.css';

import { Layout } from "antd";
import Menu from "antd/es/menu";
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import PublicationsPage from "./PublicationsPage";
import NamePage from "./NamePage";
import ProjectsPage from "./ProjectsPage";

const { Header, Content, Footer } = Layout;

class App extends Component {

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render() {
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
              <Menu.Item key="projects">
                <Link to="/projects">Projects</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{minHeight: "calc(100vh - 110px)" }}>
            <Routes>
              <Route exact path="/" element={<NamePage />} />
              <Route path="/publications" element={<PublicationsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <span><a href="mailto:swansonk.14@gmail.com"> Email</a></span>
            <span><a href="https://github.com/swansonk14"> GitHub</a></span>
            <span><a href="https://linkedin.com/in/kyle-swanson-564ab787"> LinkedIn</a></span>
            <span><a href="https://scholar.google.com/citations?user=seqcYSUAAAAJ&hl=en"> Google Scholar</a></span>
            <span><a href="https://orcid.org/0000-0002-7385-7844"> ORCID</a></span>
            <p>© 2025 Kyle Swanson. <a href="https://github.com/swansonk14/PersonalWebsite">Source Code</a></p>
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
