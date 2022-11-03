import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartProps } from "./TheBarChart";

export function TheLineChart({ initialData }: ChartProps) {
  return (
    <LineChart
      width={730}
      height={250}
      data={initialData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="submissions.beavers"
        stroke="#da9249"
        name="Beavers"
      />
      <Line
        type="monotone"
        dataKey="submissions.stars"
        stroke="#ffd805"
        name="Stars"
      />
    </LineChart>
  );
}
