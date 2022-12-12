import React, { Ref, useRef } from "react";
import { Doughnut, getDatasetAtEvent } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Backup from "../../types/Backup";
import useStore from "../../store";
import BACKUP_FAILURE_REASONS from "../../constants/backupFailureReasons";
import { useNavigate } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

function FailedClientBackups() {
  const { backups } = useStore();
  const doughnutRef: Ref<undefined> = useRef();
  const navigate = useNavigate();

  const failedClientBackupsReasons = [...BACKUP_FAILURE_REASONS].map(
    (reason) => ({
      ...reason,
      numberOfFailedBackups: backups.filter(
        (backup: Backup) => backup.motivo === reason.name.toLowerCase()
      ).length,
    })
  );

  const data = {
    labels: failedClientBackupsReasons.map((reason) => reason.name),
    datasets: [
      {
        data: failedClientBackupsReasons.map(
          (reason) => reason.numberOfFailedBackups
        ),
        backgroundColor: ["#fc748f", "#fc234e", "#e00632", "#ff0336"],
        hoverOffset: 4,
      },
    ],
  };

  const handleClick = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    if (doughnutRef.current && event) {
      const failureReasonIndex = getDatasetAtEvent(
        doughnutRef.current,
        event
      ).findIndex((item) => item.element.active);
      const failureReasonId = failedClientBackupsReasons[failureReasonIndex].id;
      navigate(`failure/reason/${failureReasonId}`);
    }
  };

  const getNumberOfCustomers = () => {
    let clientIds: number[] = [];
    backups.forEach((backup: Backup) => {
      !clientIds.includes(backup.cliente) && clientIds.push(backup.cliente);
    });
    return clientIds.length;
  };

  return (
    <div className="prose flex-column align-center p-4">
      <h2 className="text-center mb-0">
        {getNumberOfCustomers()} clientes com backups falhos
      </h2>
      <Doughnut
        ref={doughnutRef}
        onClick={handleClick}
        title="asasa"
        className="max-h-96"
        data={data}
      />
    </div>
  );
}

export default FailedClientBackups;
