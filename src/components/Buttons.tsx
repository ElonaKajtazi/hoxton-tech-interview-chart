import { AreaChartButton } from "./AreaChartButton";
import { BarChartButton } from "./BarChartButton";
import { LineChartButton } from "./LineChartButton";

export type Props = {
  setChartType: React.Dispatch<React.SetStateAction<string>>;
};
export function Buttons({ setChartType }: Props) {
  return (
    <div>
      <BarChartButton setChartType={setChartType} />
      <LineChartButton setChartType={setChartType} />
      <AreaChartButton setChartType={setChartType} />
    </div>
  );
}
