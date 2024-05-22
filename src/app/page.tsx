"use client"
import { AlignLeftOutlined, DownloadOutlined, FilterOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";
import { PageHeader } from "@ant-design/pro-components";
import { Badge, Button, Card, Col, Row } from "antd";
import { blue } from '@ant-design/colors';
import LastMonth from "./_components/last-month";
import { Variants } from "./_components/variants";

export default function Home() {

  return (
    <>
      <PageHeader
        ghost={false}
        title="Latest Covid Data"
        extra={[
          <Button key="3"><strong>Export to PDF</strong> <DownloadOutlined style={{ color: blue.primary }} /></Button>,
          <Button key="2"><strong>Notes </strong> (3) <AlignLeftOutlined style={{ color: blue.primary }} /></Button>,
          <Button key="1">
            <strong>Filter </strong>
            <Badge count={10} overflowCount={9} color={blue.primary} size="small" />
            <FilterOutlined style={{ color: blue.primary }} />
          </Button>,
        ]}
        style={{ padding: "1rem 0" }}
      >
      </PageHeader>

      <Row gutter={16}>
        <Col span={12}>
          <LastMonth />
        </Col>

        <Col span={12}>
          <Variants />
        </Col>
      </Row>
    </>
  );
}
