import React, { Component } from "react";
import { Layout, Row, Col} from "antd";
import { Switch, Route } from "react-router-dom";
import Timeline from "./Components/Timeline/TimeLineElements";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Contact from './Components/Contact';

import "./App.css";

const { Content, Sider } = Layout;

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
                </Row>
              </Content>
              <Footer />
            </Layout>
        </Layout>
        {/* <Layout style={{ minHeight: "100vh" }}>
          <Sider
            width={300}
            collapsible
            collapsed={this.state.isCollapsed}
            onCollapse={this.onCollapse}
          >
            <SideMenu collapsed={this.state.isCollapsed} />
          </Sider>
          <Layout>
            <Content className="content">
              <Switch>
                <Route exact path="/Portfolio_new/" component={About} />
                <Route exact path="/Portfolio_new/blog" render={(props) => (<Blog />)} />
                <Route exact path="/Portfolio_new/contact" render={(props) => (<Contact />)} />
              </Switch>
            </Content>
            <Footer />
          </Layout>
        </Layout> */}
      </div>
    );
  }
}

export default App;
