# Atenção, será necessario modificar o projeto de back-end(backup-node-api) para corrigir erro de política de CORS, no arquivo index subistituir:
Disso:
// Cors
app.use(cors({
    origin: ['http://localhost:5000']
}))
Para isso:
// Cors
app.use(cors());

## Passos para executar o projeto:

### `npm i`

### `npm start`
