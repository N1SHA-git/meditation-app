"use client"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", value: 199 },
  { day: "Tue", value: 399 },
  { day: "Wed", value: 599 },
  { day: "Thu", value: 799 },
  { day: "Fri", value: 999 },
  { day: "Sat", value: 599 },
  { day: "Sun", value: 199 },
];

export function Chart() {
  return (
    <ResponsiveContainer height={250}>
      <BarChart data={data}>
        <XAxis
          dataKey="day"
          axisLine={true}
          tickLine={false}
          tick={{ fill: "#999999" }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#999999" }}
          domain={[0, 1000]}
        />
        <Bar
          dataKey="value"
          fill="#95CBCF"
          radius={[35, 35, 0, 0]}
          barSize={20}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
