import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import API from "../../services/api";
import useStore from "../../store";
import BackupsByStatus from "./BackupsByStatus";
import FailedClientBackups from "./FailedClientBackups";

function BackupsPage() {
  const { setBackups } = useStore();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await API.get("backups");
        setBackups(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="w-100">
      <Header />
      <main className="p-8">
        {loading ? (
          <Loading />
        ) : (
          <div className="container-sm max-w-screen-lg mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
            <BackupsByStatus />
            <FailedClientBackups />
          </div>
        )}
      </main>
    </div>
  );
}

export default BackupsPage;
