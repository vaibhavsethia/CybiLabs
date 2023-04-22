import React, { Component } from "react";
import { Layout, Row, Col, Divider, Input, Button, Select} from "antd";
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
      fullName: '',
      email: '',
      service: '',
      message: ''
    };

    // this.myRef = React.createRef();
    this.handleClickScroll = this.handleClickScroll.bind();
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

  handleClickScroll(sectionName){
    const element = document.getElementById(sectionName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    return (
      <div>
        <Hero MoveToSection={this.handleClickScroll}></Hero>
        <Layout style={{ minHeight: "100vh" }}>

            <Layout>
              <Content>
                <Row>
                  <Col lg={4}>
                    <Timeline MoveToSection={this.handleClickScroll} />
                  </Col>
                  <Col lg={20} className="content">
                    <div className="tc pa3 mb2 header">
                      <span id="about-section" className="green-bold b">Who</span> are we ?
                    </div>

                    <p className="f3 tc">
                      Empowering your business with innovative IT solutions.
                    </p>
                    <Row gutter={16}>
                      <Col md={10} sm={24}>
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
                      <Col md={14} sm={24} className="f5">
                        <Row justify="middle" gutter={16}>
                          <Col>
                            <UserOutlined className="icons"/>
                          </Col>
                          <Col>
                            <span className="f3 b">Software Consultant</span>
                          </Col>
                        </Row>
                        <p className="pl5 pr3">
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
                        <p className="pl5 pr3">
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
                        <p className="pl5 pr3">
                          A system application is software designed to perform specific functions within a larger system or environment. 
                          It will be typically integrated with your other software applications and systems to support the business processes and operations.
                        </p>    
                      </Col>
                    </Row>
                    
                    <Divider id="service-section" className="home-divider"/>
                    
                    <div className="tc pa3 mb2 header">
                      <span className="green-bold b">What</span> do we do ?
                    </div>
                    
                    <Row gutter={16} className="pb3">
                      <Col lg={8} md={12} sm={24}>
                        <Row><Col><AntCloudOutlined className="icons"/></Col><Col className="pt2 pl3"><span className="f3 b">Cloud Computing & DevOps</span></Col></Row>
                        <Row><Col className="pl5 ml2 f5">Cloud computing is the delivery of computing services, including servers, storage, databases, networking, software, analytics, and intelligence, over the internet.</Col></Row>
                      </Col>
                      <Col lg={8} md={12} sm={24}>
                        <Row><Col><AreaChartOutlined className="icons"/></Col><Col className="pt2 pl3"><span className="f3 b">Business Analytics</span></Col></Row>
                        <Row><Col className="pl5 ml2 f5">Analytics and Business Intelligence (BI) refers to the tools, technologies, and processes used to extract insights and valuable information from raw data.</Col></Row>  
                      </Col>
                      <Col lg={8} md={12} sm={24}>
                        <Row><Col><LaptopOutlined className="icons"/></Col><Col className="pt2 pl3"><span className="f3 b">Full Stack Solutions</span></Col></Row>
                        <Row><Col className="pl5 ml2 f5">Full tech solutions refer to comprehensive services that cover all aspects of technology, from consulting and strategy to design, development, implementation, and maintenance, to address the specific needs of an organization.</Col></Row>
                      </Col>
                    </Row>
                    <Row gutter={16} className="pb4">
                    <Col lg={8} md={12} sm={24}>
                      <Row><Col><ClusterOutlined className="icons"/></Col><Col className="pt2 pl3"><span className="f3 b">AI & ML</span></Col></Row>
                      <Row><Col className="pl5 ml2 f5">Artificial Intelligence (AI) and Machine Learning (ML) refer to the development and use of computer systems that can perform tasks that typically require human intelligence, including the ability to learn and adapt from experience.</Col></Row>  
                    </Col>
                    <Col lg={8} md={12} sm={24}>
                      <Row><Col><MenuUnfoldOutlined className="icons"/></Col><Col className="pt2 pl3"><span className="f3 b">Workflow Automation</span></Col></Row>
                      <Row><Col className="pl5 ml2 f5">Our workflow automation services streamline business operations by automating repetitive tasks, reducing manual effort, and improving efficiency. We analyze processes, integrate software systems, develop custom workflows, and provide ongoing maintenance and support. </Col></Row>  
                    </Col>
                    <Col lg={8} md={12} sm={24}>
                      <Row><Col><AuditOutlined className="icons"/></Col><Col className="pt2 pl3"><span className="f3 b">IOT Solutions</span></Col></Row>
                      <Row><Col className="pl5 ml2 f5">At our software consultancy, we offer comprehensive IoT services to help businesses integrate connected devices, sensors, and data analytics into their operations. From IoT strategy and consulting to development and integration, as well as analytics and insights, we provide end-to-end solutions that are tailored to our clients' specific needs.</Col></Row>
                    </Col>
                    </Row>
                    <Divider className="home-divider"/>

                    <div className="tc pa3 mb2 header">
                      <span id="contact-section" className="green-bold b">Request</span> a consultation
                    </div>

                    <Row justify={'center'} align='middle' className="tc">
                    <Col md={12} sm={24}>
                        <p className="f3 b">
                          Send us a <span className="green-bold">message</span> and we will be in <span className="green-bold">touch</span>.
                        </p>

                        <div className="request-box ml2 mr2">
                          <div className="f5 ml5 mb2 mt3 tl b">Full Name:</div>
                          <Input
                            className="name-box"
                            type="text"
                            style={{ width: 360  }}
                            name="user_name"
                            placeholder="Enter your name"
                            required
                            onChange={(e) => this.setState({ fullName: e.target.value })}
                          />

                          <div className="f5 ml5 mb2 mt3 tl b green-bold">Email ID:</div>
                          <Input
                            className="name-box"
                            type="text"
                            style={{ width: 360 }}
                            name="user_name"
                            placeholder="Enter your mailing address"
                            required
                            onChange={(e) => this.setState({ email: e.target.value })}
                          />

                          <div className="f5 ml5 mb2 mt3 tl b">Service: </div>
                          <Select
                            defaultValue="Smoothen"
                            style={{ width: 360 }}
                            // onChange={}
                            className="name-box tl"
                            options={[
                              { value: 'Smoothen', label: "I don't know what I want, can you smoothen my business process?" },
                              { value: "Have Idea", label: "I have an idea, not sure if that will work out" },
                              { value: 'Full Idea', label: "I know exactly what I want, build it for me" },
                              { value: 'Disabled', label: 'We do not require your service', disabled: true },
                            ]}
                            onChange={(e) => this.setState({ username: e })}
                          />

                          <div className="f5 ml5 mb2 mt3 tl b green-bold">Additional Message: </div>
                          <TextArea
                            className="name-box"
                            type="text"
                            style={{ width: 360 }}
                            name="message"
                            placeholder="Enter your message"
                            required
                            onChange={(e) => this.setState({ message: e.target.value })}
                          />

                          <Row justify={'center'} align='middle'  className="pt4"><Col><Button onClick={() => this.SendMail()} className="submit-button">Send Message</Button></Col></Row>
                        </div>
                      </Col>
                      <Col md={12} sm={24}>
                        <p className="">
                          
                        </p>
                      </Col>
                    </Row>
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
