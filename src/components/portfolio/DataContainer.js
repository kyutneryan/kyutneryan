import React from "react";
import { Row, Col, Typography, Divider, List } from "antd";

const { Title } = Typography;

const DataContainer = ({ title = "", portfolioData = [] }) => {
  return (
    <Col style={{ marginTop: 12 }} span={24}>
      <Row justify="center">
        <Divider>
          <Title level={3} style={{ textAlign: "center" }}>
            {title}
          </Title>
        </Divider>
      </Row>
      <List
        itemLayout="horizontal"
        dataSource={portfolioData}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={item.icon}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </Col>
  );
};

export default DataContainer;
