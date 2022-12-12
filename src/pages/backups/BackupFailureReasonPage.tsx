import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import BACKUP_FAILURE_REASONS from "../../constants/backupFailureReasons";
import useStore from "../../store";
import Backup from "../../types/Backup";

function BackupFailureReasonPage() {
  let { failureReasonId } = useParams();
  const { backups } = useStore();
  const backupFailureReason = BACKUP_FAILURE_REASONS.find(
    (reason) => reason.id === failureReasonId
  );
  return (
    <div className="w-100">
      <Header />
      <main className="p-8">
        <div className="prose container-sm max-w-screen-lg mx-auto">
          <h2 className="text-center">{backupFailureReason?.name}</h2>
          <ul className="list-decimal">
            {backups
              .filter(
                (backup) =>
                  backup.motivo === backupFailureReason?.name.toLowerCase()
              )
              .map(({ id, cliente, data }: Backup) => (
                <li key={id} className="text-center bg-slate-100 border">
                  <p>
                    <b>Client {cliente}</b> - {data}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default BackupFailureReasonPage;
