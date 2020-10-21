// importation du dataMapper
const dataMapper = require("../dataMapper");

const mainController = {
    
    // page d'accueil
    homePage: (request, response) => {
        dataMapper.getAllPokemon( (error, results) => {
            if (error) {
                return response.status(500).send(error);
            }
            response.render('home', {
                pokemons: results.rows
            });
        });
    },
};

// exportation du controller
module.exports = mainController;