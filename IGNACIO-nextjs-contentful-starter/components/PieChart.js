import dynamic from "next/dynamic";

import { PieChart } from "@carbon/charts-react";

// Styles
import "@carbon/styles/css/styles.css";
import "@carbon/charts/styles.css";

export default function _PieChart(content) {
  const { title, heightInPixels, datapoints, datapointsJson } =
    content?.fields || {};

  const pieData = datapoints.map((datapoint) => {
    const { groupName, value } = datapoint?.fields || {};

    return {
      group: groupName,
      value,
    };
  });

  return (
    <div class="bx--grid" style={{ margin: "2rem 0" }}>
      <div class="bx--row">
        <div class="bx--col bx--col-sm-4 bx--col-md-4 bx--col-lg-4"></div>

        <div class="bx--col bx--col-sm-12 bx--col-md-12 bx--col-lg-12">
          <PieChart
            data={pieData}
            options={{
              title,
              height: `${heightInPixels}px`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
