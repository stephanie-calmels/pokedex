// importation des modules nécessaires
const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController');

// page d'accueil
router.get('/', mainController.homePage);

//exportation su router
module.exports = router;
