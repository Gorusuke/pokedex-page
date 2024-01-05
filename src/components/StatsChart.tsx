import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { StatsPropsModified } from "../types";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const StatsChart = ({
  pokemonStats,
}: {
  pokemonStats: StatsPropsModified[];
}) => {
  const data = {
    labels: [
      pokemonStats[0]?.name,
      pokemonStats[1]?.name,
      pokemonStats[3]?.name,
      pokemonStats[2]?.name,
      pokemonStats[4]?.name,
      pokemonStats[5]?.name,
    ],
    datasets: [
      {
        label: "Pokemon Base Stats",
        data: [
          pokemonStats[0]?.stat,
          pokemonStats[1]?.stat,
          pokemonStats[3]?.stat,
          pokemonStats[2]?.stat,
          pokemonStats[4]?.stat,
          pokemonStats[5]?.stat,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="chart-container">
      <PolarArea data={data} />
    </div>
  );
};

export default StatsChart;
