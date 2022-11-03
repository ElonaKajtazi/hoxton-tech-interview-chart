import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Student } from "../App";
export type ChartProps = {
  initialData: Student[];
};
export function TheBarChart({ initialData }: ChartProps) {
  return (
    <BarChart width={730} height={250} data={initialData}>
      <CartesianGrid stroke="" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="submissions.beavers" name="Beavers" fill="#da9249" label />
      <Bar dataKey="submissions.stars" name="Stars" fill="#ffd805" label />
    </BarChart>
  );
}
