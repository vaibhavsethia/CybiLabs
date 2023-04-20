import React, { Component } from "react";
import { Layout, Row, Col} from "antd";
import Timeline from "./Components/Timeline/TimeLineElements";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Contact from './Components/Contact';

import "./App.css";
import PageHeader from "./Utils/PageHeader";

const { Content } = Layout;

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: false,
    };
  }

  onCollapse = (isCollapsed) => {
    this.setState({ isCollapsed });
  };

  BringInView = () => {
    window.scrollBy({
      top: 2000,
      behavior: "smooth",
    });
  };

  componentDidMount() {
    if (Number(window.screen.width) < 700) {
      this.setState({
        isCollapsed: true,
      });
    }
  }

  render() {
    return (
      <div>
        <Hero View={this.BringInView}></Hero>
        <Layout style={{ minHeight: "100vh" }}>

            <Layout>
              <Content>
                <Row>
                  <Col lg={4}>
                    <Timeline />
                  </Col>
                  <Col lg={20}>
                    <PageHeader Title="Who are we ?"/>
                    <PageHeader Title="What do we do ?"/>
                    <PageHeader Title="Request a consultation"/>
                  </Col>
                </Row>
              </Content>
              <Footer />
            </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
