import { Props } from "./Buttons";

export function AreaChartButton({ setChartType }: Props) {
  return (
    <button
      onClick={() => {
        setChartType("area");
      }}
    >
      AREA CHART
    </button>
  );
}
