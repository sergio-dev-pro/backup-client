import React from "react";
import Header from "../../components/Header";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const BackupsByStatus = () => {
  return <Doughnut data={data} />;
};

function BackupsPage() {
  return (
    <div className="w-100 bg-slate-100">
      <Header />
      <main>
        <BackupsByStatus />
      </main>
    </div>
  );
}

export default BackupsPage;
