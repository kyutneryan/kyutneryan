import React from "react";
import { Layout, Grid, Row, Col, Typography, Image, Divider, List } from "antd";
import HaykKyutneryanPhoto from "../../assets/images/hayk-kyutneryan.jpeg";
import {
  CopyrightTwoTone,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  GithubFilled,
} from "@ant-design/icons";
import {
  EDUCATION,
  CONTACT,
  LANGUAGES,
  SKILLS,
  EXPERIENCE,
} from "../../constants/portfolioData";
import DataContainer from "./DataContainer";

const { Footer, Content } = Layout;
const { Title, Text, Link } = Typography;
const { useBreakpoint } = Grid;

const Portfolio = () => {
  const screens = useBreakpoint();

  return (
    <Layout>
      <Content>
        <Row className="site-row" justify="center">
          <Col className="site-column" xs={24} sm={22} lg={20} xl={22}>
            <Row>
              <Col className="card-first-column" xs={24} md={10} lg={9} xl={8}>
                <Row className="site-row">
                  <Col span={24}>
                    <Row justify="center">
                      <Title style={{ textAlign: "center" }}>
                        Hayk Kyutneryan
                      </Title>
                    </Row>
                  </Col>
                  <Col style={{ marginTop: 12 }} span={24}>
                    <Row justify="center">
                      <Image width={240} src={HaykKyutneryanPhoto} />
                    </Row>
                  </Col>
                  <DataContainer title="Contact" portfolioData={CONTACT} />
                  <DataContainer title="Languages" portfolioData={LANGUAGES} />
                </Row>
              </Col>

              <Col xs={24} md={14} lg={15} xl={16}>
                <Row justify="center" className="site-row">
                  <DataContainer title="Education" portfolioData={EDUCATION} />
                  <DataContainer
                    title="Work experience"
                    portfolioData={EXPERIENCE}
                  />
                  <DataContainer title="Skills" portfolioData={SKILLS} />
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>

      <Footer>
        <Row>
          <Col xs={24} md={12}>
            <Row
              justify={
                (screens.sm && !screens.md) || screens.xs ? "center" : "start"
              }
            >
              <Link
                style={{ marginRight: 8 }}
                href="https://www.facebook.com/hayk.kyutneryan"
                target="_blank"
              >
                <FacebookFilled style={{ fontSize: 24, color: "#1890ff" }} />
              </Link>{" "}
              <Link
                style={{ marginRight: 8 }}
                href="https://www.instagram.com/kyutneryan/"
                target="_blank"
              >
                <InstagramFilled style={{ fontSize: 24, color: "#1890ff" }} />
              </Link>{" "}
              <Link
                style={{ marginRight: 8 }}
                href="https://www.linkedin.com/in/kyutneryan/"
                target="_blank"
              >
                <LinkedinFilled style={{ fontSize: 24, color: "#1890ff" }} />
              </Link>{" "}
              <Link
                style={{ marginRight: 8 }}
                href="https://github.com/kyutneryan"
                target="_blank"
              >
                <GithubFilled style={{ fontSize: 24, color: "#1890ff" }} />
              </Link>
            </Row>
          </Col>
          <Col xs={24} md={12}>
            <Row
              justify={
                (screens.sm && !screens.md) || screens.xs ? "center" : "end"
              }
            >
              <Text strong>
                <CopyrightTwoTone /> {new Date().getFullYear()} All rights
                reserved.
              </Text>
            </Row>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};

export default Portfolio;
