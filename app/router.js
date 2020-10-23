// importation des modules nécessaires
const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController');

// page d'accueil
router.get('/', mainController.homePage);

// détails d'un Pokémon
router.get('/details/:id', mainController.pokemonPage);

// affichage des types
router.get('/type', mainController.typePage);

// filtre par type
router.get('/filter/:type', mainController.filterPage);

//exportation su router
module.exports = router;
