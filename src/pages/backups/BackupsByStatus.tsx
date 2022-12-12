import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Backup from "../../types/Backup";
import useStore from "../../store";

ChartJS.register(ArcElement, Tooltip, Legend);

function BackupsByStatus() {
  const { backups } = useStore();
  const hasBackups = backups.length;
  const numberOfSuccessfulBackups = hasBackups
    ? backups.filter((backup: Backup) => backup.status === "sucesso").length
    : 0;
  const numberOfFailedBackups = hasBackups
    ? backups.filter((backup: Backup) => backup.status === "falha").length
    : 0;
  const data = {
    labels: ["Sucesso", "Falha"],
    datasets: [
      {
        data: [numberOfSuccessfulBackups, numberOfFailedBackups],
        backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="prose flex-column align-center p-4">
      <h2 className="text-center mb-0">{backups.length} backups realizados</h2>
      <Doughnut className="max-h-96" data={data} />
    </div>
  );
}

export default BackupsByStatus;
