import { Props } from "./Buttons";

export function BarChartButton({ setChartType }: Props) {
  return (
    <button
      onClick={() => {
        setChartType("bar");
      }}
    >
      BAR CHART
    </button>
  );
}
