import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartProps } from "./components/TheBarChart";

export function TheAreaChart({ initialData }: ChartProps) {
  return (
    <AreaChart
      width={730}
      height={250}
      data={initialData}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#da9249" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#da9249" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#ffd805" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#ffd805" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="submissions.beavers"
        stroke="#da9249"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
      <Area
        type="monotone"
        dataKey="submissions.stars"
        stroke="#ffd805"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
    </AreaChart>
  );
}
