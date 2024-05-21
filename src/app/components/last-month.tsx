import { Card } from "antd";
import Favourite from "./favourite";
import { useEffect, useState } from "react";

import { Chart } from "@berryv/g2-react";

export default function LastMonth() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function loadData() {
      const response = await fetch("https://api.ukhsa-dashboard.data.gov.uk/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_cases_casesByDay?year=2024&page_size=365");
      const jsonData = await response.json();
      const cleanData = jsonData.results.slice(-30).map((r: { date: string, metric_value: number }) => {
        return { date: r.date, count: r.metric_value }
      })
      setData(cleanData)
    }
    loadData();
  }, [])

  return (
    <Card title="Cases reported in last 30 Days" bordered={false} extra={<Favourite slug={"last-month"} />}>
      <Chart
        options={{
          type: "line",
          autoFit: true,          
          height:300,
          data: data,
          encode: { x: "date", y: "count" },
          scale: { y: {domainMin:0} },
          style: {
            lineWidth: 3,
            shape: "smooth"
          },
        }}
      />
    </Card>
  )
}