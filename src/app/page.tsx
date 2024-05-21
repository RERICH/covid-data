"use client"
import { AlignLeftOutlined, DownloadOutlined, FilterOutlined } from "@ant-design/icons";
import { PageHeader } from "@ant-design/pro-components";
import { Badge, Button, Card, Col, Row } from "antd";
import { cyan } from '@ant-design/colors';

export default function Home() {
  return (
    <>
      <PageHeader
        ghost={false}
        title="Latest Covid Data"
        extra={[
          <Button key="3"><strong>Export to PDF</strong> <DownloadOutlined style={{color: cyan.primary, fontSize: "1.1rem"}} /></Button>,
          <Button key="2"><strong>Notes </strong> (3) <AlignLeftOutlined style={{color: cyan.primary, fontSize: "1.1rem"}} /></Button>,
          <Button key="1">
            <strong>Filter </strong> 
            <Badge count={10} overflowCount={9} color={cyan.primary} size="small" /> 
            <FilterOutlined style={{color: cyan.primary, fontSize: "1.1rem"}} />
          </Button>,
        ]}
      >
      </PageHeader>

      <Row gutter={16}>
    <Col span={12}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={12}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
  </Row>
    </>
  );
}
