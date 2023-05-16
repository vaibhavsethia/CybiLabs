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
  ApiOutlined,
  ClusterOutlined,
  MenuUnfoldOutlined,
  AuditOutlined
} from "@ant-design/icons";
import "./App.css";
import Avatar, { genConfig } from 'react-nice-avatar'

const { Content } = Layout;
const { TextArea } = Input;

const Maleconfig = genConfig({ sex: "man" }) 
const Femaleconfig = genConfig({ sex: "woman" }) 

export class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: false,
      fullName: '',
      email: '',
      service: '',
      message: '',
      section: 'home'
    };

    // this.myRef = React.createRef();
    this.handleClickScroll = this.handleClickScroll.bind(this);
    this.UpdateSection = this.UpdateSection.bind(this);

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

  UpdateSection(changeSection){
    this.setState({
      section: changeSection
    })
  }

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
                    <Timeline MoveToSection={this.handleClickScroll} section={this.state.section} ChangeSection={this.UpdateSection}/>
                  </Col>
                  {
                      this.state.section === 'home' ?
                      <Col lg={20} className="content">
                      <div className="tc pa3 mb2 header">
                        <span id="about-section" className="green-bold b">Who</span> are we ?
                      </div>
                      {/* --------------- HOME ---------------*/}
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
                            <LaptopOutlined className="icons"/>
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
                              <ApiOutlined className="icons"/>
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
                      
                      {/* --------------- SERVICES ---------------*/}

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
                        <Row><Col className="pl5 ml2 f5">At our software consultancy, we offer comprehensive IoT services to help businesses integrate connected devices, sensors, and data analytics into their operations.</Col></Row>
                      </Col>
                      </Row>

                      <Divider id="testimon-section" className="home-divider"/>
                      
                      {/* --------------- TESTIMONIALS ---------------*/}
                      <div className="tc pa3 mb2 header">
                        <span className="green-bold b">Hear</span> from our customers
                      </div>

                      <Avatar style={{ width: '8rem', height: '8rem' }} {...Maleconfig} />

                      {/* --------------- CONTACT ---------------*/}
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
                              placeholder={this.state.fullName}
                              required
                              onChange={(e) => this.setState({ fullName: e.target.value })}
                            />
  
                            <div className="f5 ml5 mb2 mt3 tl b green-bold">Email ID:</div>
                            <Input
                              className="name-box"
                              type="text"
                              style={{ width: 360 }}
                              name="user_name"
                              placeholder={this.state.email}
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
                                { value: 'Smoothen', label: "Don't know what I want, can you smoothen my business process?" },
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
                              placeholder={this.state.message}
                              required
                              onChange={(e) => this.setState({ message: e.target.value })}
                            />
  
                            <Row justify={'center'} align='middle'  className="pt4">
                              <Col><Button 
                              href={`mailto:info@cybilabs.tech?subject=${this.state.service}&body=From => ${this.state.fullName} : message => ${this.state.message}`}
                              onClick={() => this.SendMail()} className="submit-button">Send Message</Button></Col>
                            </Row>
                          </div>
                        </Col>
                        <Col md={12} sm={24}>
                          {/* <ReactGlobe /> */}
                        </Col>
                      </Row>
                    </Col> :
                      this.state.section === 'terms' ? 
                        <Col lg={20} className="content">
                          {/* --------------- TERMS ---------------*/}
                          <div className="tc pa3 mb2 header">
                            <span id="about-section" className="green-bold b">Terms</span> and Condition
                          </div>
                          <div>
                            <p className="f4 green-bold">
                              1) Acceptance of Terms
                            </p>
                            <p className="f5">
                              At Cybilabs, we offer a range of software consultancy services to our clients. Our team of experts provides software development, project management, and technical consulting services to help clients achieve their business goals. Our website provides visitors with a detailed description of our services, as well as our contact details and blog link.
                              Software Development: Our software development services are designed to help clients create custom software solutions that meet their unique business needs. We work closely with our clients to understand their requirements and develop software that is efficient, effective, and user-friendly. Our development services cover a range of technologies, including web, mobile, and desktop applications.
                              Project Management: At Cybilabs, we understand that effective project management is essential to the success of any software development project. Our experienced project managers work closely with clients to plan, execute, and monitor projects to ensure they are delivered on time, within budget, and to the required quality standards.
                              Technical Consulting: Our technical consulting services are designed to help clients make the most of their existing technology infrastructure. Our consultants are experts in a range of technologies, including cloud computing, databases, networking, and cybersecurity. We work closely with clients to identify their technology needs and provide expert advice on the best solutions to meet those needs.
                            </p>
                            <p className="f4 green-bold">
                              2) Intellectual Property Rights
                            </p>
                            <p className="f5">
                              Cybilabs owns all intellectual property rights in the content of our website unless otherwise indicated. This includes software code, trademarks, logos, and other materials. You are not permitted to copy, reproduce, or use any of our intellectual property without our prior written consent.
                              We take the protection of our intellectual property rights very seriously. If you believe that your intellectual property rights have been infringed upon by any content on our website, please contact us immediately.
                            </p>
                            <p className="f4 green-bold">
                              3) Confidentiality
                            </p>
                            <p className="f5">
                              At Cybilabs, we understand that our clients' data and information are confidential and sensitive. We take the confidentiality of our clients' information very seriously and have strict policies in place to ensure its protection.
                              We do not disclose any confidential information to third parties without the prior consent of our clients. This includes any data, information, or intellectual property shared with us during the course of our services. We take all necessary precautions to safeguard our clients' information, including using secure data storage and transmission methods.
                            </p>
                            <p className="f4 green-bold">
                              4) Payment Terms
                            </p>
                            <p className="f5">
                              Our payment terms are detailed in our contracts with clients. We require payment for our services according to agreed-upon terms and schedules. We understand that cash flow is critical to the success of any business, and we work closely with our clients to ensure that our payment terms are fair and reasonable.
                              Late payments may result in additional fees or the termination of our services. If you are experiencing financial difficulties and are having trouble making payments, please contact us immediately. We are always willing to work with our clients to find a mutually beneficial solution.
                            </p>
                          </div>
                        </Col>:
                          <Col lg={20} className="content">
                            {/* --------------- POLICY ---------------*/}
                            <div className="tc pa3 mb2 header">
                              <span id="about-section" className="green-bold b">Privacy</span> Policy
                            </div>

                            <div className="f5">
                              <p>
                                <span className="green-bold">Thank you </span>for visiting our website. We take your privacy seriously and are committed to protecting your personal 
                                information. This privacy policy outlines the types of personal information we collect and how we use and protect that information.
                              </p>
                              <p className="f4 green-bold">
                                Information We Collect
                              </p>
                              <p>
                                We may collect personal information such as your name, 
                                email address, and other information you provide when you submit a form or interact with our website. 
                                We may also collect information about your use of our website, such as your IP address, browser type, and device information.
                              </p>
                              <p className="f4 green-bold">
                                How We Use Your Information
                              </p>
                              <p>
                                We use your personal information to respond to your inquiries, 
                                provide customer support, and improve our website and services. 
                                We may also use your information to send you marketing communications about our products and services, 
                                unless you opt out of such communications. We do not sell, rent, or share your personal information with 
                                third parties for their marketing purposes.
                              </p>
                              <p className="f4 green-bold">
                                How We Protect Your Information
                              </p>
                              <p>
                                We take reasonable measures to protect your personal information from unauthorized access, 
                                disclosure, alteration, and destruction. We use industry-standard security technologies and 
                                procedures to safeguard your information, and we regularly review and update our security practices.
                              </p>
                              <p className="f4 green-bold">
                                Your Choices
                              </p>
                              <p>
                                You have the right to access, correct, or delete your personal information that we hold. You may also choose to opt out of receiving 
                                marketing communications from us. If you have any questions or concerns about our privacy practices or your personal information, 
                                please contact us using the information provided on our website.
                              </p>
                              <p className="f4 green-bold">
                                Cookies and Other Tracking Technologies
                              </p>
                              <p className="f5">
                                We may use cookies and other tracking technologies to collect information about your use of our website. 
                                This information may include your IP address, browser type, and device information. Cookies are small data 
                                files that are stored on your device when you visit our website. You may choose to disable cookies in your browser settings, 
                                but please note that some features of our website may not function properly if cookies are disabled.

                              </p>
                              <p className="f4 green-bold">
                                Changes to this Privacy Policy
                              </p>
                              <p>
                                We may update this privacy policy from time to time to reflect changes in our practices or legal obligations. 
                                We will post a notice on our website if we make significant changes to this policy.
                              </p>
                            </div>
                          </Col>
                  }
                  
                </Row> :
              </Content>
              <Footer ChangeSection={this.UpdateSection}/>
            </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
