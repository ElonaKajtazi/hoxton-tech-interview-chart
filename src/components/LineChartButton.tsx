import { Props } from "./Buttons";

export function LineChartButton({setChartType}: Props) {
    return (
        <button
        onClick={() => {
          setChartType("line");
        }}
      >
        LINE CHART
      </button>
    )
}