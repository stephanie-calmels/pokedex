// création serveur express
const express = require('express');
const app = express();

// configuration dotenv
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

// configuration du dossier des ressources statiques
app.use(express.static('./public'));

// gestion des templates
app.set('view engine', 'ejs');
app.set('views', './app/views');

// gestion des routes
const router = require('./app/router');
app.use(router);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
