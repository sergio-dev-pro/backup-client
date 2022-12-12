import create from "zustand";
import Backup from "./types/Backup";

type Backups = Backup[] | [];
type Store = {
  backups: Backups;
  setBackups: (backups: Backups) => void;
};

const useStore = create<Store>((set) => ({
  backups: [],
  setBackups: (backups) => set((state) => ({ ...state, backups })),
}));

export default useStore;
