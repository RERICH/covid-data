import { Card } from "antd";
import { useEffect, useState } from "react";
import Favourite from "./favourite";
import { Chart } from "@berryv/g2-react";

export function Variants () {
    const [data, setData] = useState([])

useEffect(() => {
  async function loadData() {
    const response = await fetch("https://api.ukhsa-dashboard.data.gov.uk/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_cases_lineagePercentByWeek?date=2024-01-01&page_size=365&year=2024");
    const jsonData = await response.json();
    const cleanData = jsonData.results.map((r: { stratum: string, metric_value: number }) => {
      return { variant: r.stratum, percent: r.metric_value }
    })
    console.log(cleanData)
    setData(cleanData)
  }
  loadData();
}, [])
return(
    <Card title="Variants" bordered={false} extra={<Favourite slug={"variants"} />}>
      <Chart
        options={{
          type: "interval",
          autoFit: true,
          height:300,
            data: data,
            encode: { x: "variant", y: "percent" },
          
        }}
      />
    </Card>
)
}