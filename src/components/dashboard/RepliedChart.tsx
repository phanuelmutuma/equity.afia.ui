import { ResponsivePie } from "@nivo/pie";
import React from "react";

const RepliedChart = () => {
  const someData = [
    {
      id: "Replied",
      label: "replied",
      value: 1,
      color: "hsl(31, 70%, 50%)",
    },
    {
      id: "Not Replied",
      label: "not replied",
      value: 1,
      color: "hsl(265, 70%, 50%)",
    },
  ];
  return (
    <div className="w-66 h-52">
      <ResponsivePie
        data={someData}
        margin={{ top: 0, right: 80, bottom: 50, left: 80 }}
        innerRadius={0}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={1}
        colors={{ scheme: "dark2" }}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsTextOffset={14}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsOffset={-50}
        arcLinkLabelsDiagonalLength={36}
        arcLinkLabelsStraightLength={10}
        arcLinkLabelsThickness={2}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["brighter", 3]],
        }}
        motionConfig="slow"
      />
    </div>
  );
};

export default RepliedChart;
