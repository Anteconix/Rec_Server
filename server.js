const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database.js');
const proprietarioRoutes = require('./routes/proprietario.js');
const veiculoRoutes = require('./routes/veiculo.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/proprietarios', proprietarioRoutes);
app.use('/veiculos', veiculoRoutes);

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });
})
    .catch(err => {
        console.error('Erro ao conectar e sincronizar o banco de dados:', err);
});