type Backup = {
  id: number;
  cliente: number;
  data: string;
  status: "sucesso" | "falha";
  motivo: string;
};
export default Backup;
