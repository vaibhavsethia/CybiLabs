import React, { Component } from "react";
import { Layout, Row, Col, Divider, Input} from "antd";
import Timeline from "./Components/Timeline/TimeLineElements";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import {
  UserOutlined,
  AntCloudOutlined,
  AreaChartOutlined,
  LaptopOutlined,
  ClusterOutlined,
  MenuUnfoldOutlined,
  AuditOutlined
} from "@ant-design/icons";
import "./App.css";
import { Rotate } from "react-reveal";

const { Content } = Layout;
const { TextArea } = Input;

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
                  <Col lg={20} className="content">
                    <div className="tc pa3 mb2 header">
                      <span className="green-bold b">Who</span> are we ?
                    </div>

                    <p className="f3 tc">
                      Empowering your business with innovative IT solutions.
                    </p>
                    <Row gutter={16}>
                      <Col md={12} sm={24}>
                        <p className="ml4 mr4 f4">
                          Looking to turn your innovative ideas into reality? Choose Cybilabs - 
                          the premier software consultancy company that can bring your visions to life. 
                          Our team of experienced and skilled professionals work closely with our clients 
                          from initial consultation to the final product launch. Our team stays up-to-date with the latest trends and technologies, 
                          allowing us to provide cutting-edge solutions tailored to meet the unique needs of each client. 
                          We understand that every project is different, and we approach each one with a fresh perspective to ensure 
                          the best possible outcome.
                        </p>
                      </Col>
                      <Col md={12} sm={24} className="f5">
                        <Row justify="middle" gutter={16}>
                          <Col>
                            <UserOutlined className="icons"/>
                          </Col>
                          <Col>
                            <span className="f3 b">Software Consultant</span>
                          </Col>
                        </Row>
                        <p className="pl5">
                          A software consultant is a professional who provides expert advice and assistance on software development and 
                          implementation to businesses and organizations. We help our clients identify software solutions that meet their specific 
                          needs and goals, and provide guidance on best practices and industry standards.
                        </p>

                        <Row justify="middle" gutter={16}>
                          <Col>
                            <UserOutlined className="icons"/>
                          </Col>
                          <Col>
                            <span className="f3 b">Technology Analysis</span>
                          </Col>
                        </Row>
                        <p className="pl5">
                          Technology analysis is the process of evaluating and assessing technology to determine its potential benefits, 
                          limitations, and impact on various stakeholders. We will be analyzing the technical, economic, social, and environmental 
                          factors surrounding the technology to make informed decisions about your project.
                        </p>
                      
                        <Row justify="middle" gutter={16}>
                          <Col>
                            <UserOutlined className="icons"/>
                          </Col>
                          <Col>
                            <span className="f3 b">System Application</span>
                          </Col>
                        </Row>
                        <p className="pl5">
                          A system application is software designed to perform specific functions within a larger system or environment. 
                          It will be typically integrated with your other software applications and systems to support the business processes and operations.
                        </p>    
                      </Col>
                    </Row>
                    
                    <Divider className="home-divider"/>
                    
                    <div className="tc pa3 mb2 header">
                      <span className="green-bold b">What</span> do we do ?
                    </div>
                    
                    <Row gutter={16} className="pb2">
                      <Col lg={8} md={12} sm={24}><Row><Col><AntCloudOutlined className="icons"/></Col><Col className="pt2 pl3"><span className="f3 b">Cloud Computing & DevOps</span></Col></Row></Col>
                      <Col lg={8} md={12} sm={24}><Row><Col><AreaChartOutlined className="icons"/></Col><Col className="pt2 pl3"><span className="f3 b">Business Analytics</span></Col></Row></Col>
                      <Col lg={8} md={12} sm={24}><Row><Col><LaptopOutlined className="icons"/></Col><Col className="pt2 pl3"><span className="f3 b">Full Stack Solutions</span></Col></Row></Col>
                    </Row>
                    <Row gutter={16} className="pb2">
                    <Col lg={8} md={12} sm={24}><Row><Col><ClusterOutlined className="icons"/></Col><Col className="pt2 pl3"><span className="f3 b">AI & ML</span></Col></Row></Col>
                    <Col lg={8} md={12} sm={24}><Row><Col><MenuUnfoldOutlined className="icons"/></Col><Col className="pt2 pl3"><span className="f3 b">Workflow Automation</span></Col></Row></Col>
                    <Col lg={8} md={12} sm={24}><Row><Col><AuditOutlined className="icons"/></Col><Col className="pt2 pl3"><span className="f3 b">IOT Solutions</span></Col></Row></Col>
                    </Row>
                    <Divider className="home-divider"/>

                    {/* <div className="tc pa3 mb2 header">
                      <span className="green-bold b">Request</span> a consultation
                    </div>

                    <Row>
                    <Col md={12} sm={24}>
                        <p className="f3 b">
                          Send us a <span className="green-bold">message</span> and we will be in <span className="green-bold">touch</span>.
                        </p>

                        <div className="request-box ml2 mr2">
                        <form className="contact-form" onSubmit={this.sendEmail}>
                          <div className="form-label pa2 mb3 tl">
                            Name :{" "}
                            <Input
                              className="name-box"
                              type="text"
                              name="user_name"
                              placeholder="Enter your name"
                              required
                            />
                          </div>
                          <div className="form-label pa2 mb3 tl">
                            Email :{" "}
                            <Input
                              className="mail-box"
                              type="email"
                              name="user_email"
                              placeholder="Enter your mailing address"
                              required
                            />{" "}
                          </div>
                          <div className="form-label pa2 mb3 tl v-top">
                            Message :{" "}
                            <TextArea
                              className="message-box"
                              type="text"
                              name="message"
                              placeholder="Enter your message"
                              required
                            />
                          </div>
                          <input
                            className="submit-button"
                            type="submit"
                            value="Send Message"
                          />
                        </form>
                        </div>
                      </Col>
                      <Col md={12} sm={24}>
                        <p className="">
                          
                        </p>
                      </Col>
                    </Row> */}
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
