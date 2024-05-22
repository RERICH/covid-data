import { Card } from "antd";
import { useEffect, useState } from "react";
import Favourite from "./favourite";
import { Chart } from "@berryv/g2-react";
import Comments from "./comments";
import { trpc } from "../_trpc/client";

export function Variants() {
  const { data } = trpc.getVariants.useQuery()
  return (
    <Card
      title="Variants"
      bordered={false}
      extra={<Favourite slug={"variants"} />}
      actions={[<Comments  key="comments" />]}
    >
      <Chart
        options={{
          type: "interval",
          autoFit: true,
          height: 300,
          data: data || [],
          encode: { x: "variant", y: "percent" },

        }}
      />
    </Card>
  )
}