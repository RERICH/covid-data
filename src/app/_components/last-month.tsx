"use client"
import { Card } from "antd";
import Favourite from "./favourite";
import { useEffect, useState } from "react";
import { Chart } from "@berryv/g2-react";
import Comments from "./comments";
import { trpc } from "../_trpc/client";

export default function LastMonth() {
  const {data} = trpc.getLastMonth.useQuery()

  return (
    <Card
      title="Cases reported in last 30 Days"
      bordered={false}
      extra={<Favourite slug={"last-month"} />}
      actions={[<Comments key="comments" />]}
    >
      <Chart
        options={{
          type: "line",
          autoFit: true,
          height: 300,
          data: data || [],
          encode: { x: "date", y: "count" },
          scale: { y: { domainMin: 0 } },
          style: {
            lineWidth: 3,
            shape: "smooth"
          },
        }}
      />
    </Card>
  )
}