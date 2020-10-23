// importation du dataMapper
const dataMapper = require("../dataMapper");

const mainController = {
    
    // page d'accueil
    homePage: (request, response) => {
        dataMapper.getAllPokemon( (error, results) => {
            if (error) {
                return response.status(500).send(error);
            }
            response.render('list', {
                pokemons: results.rows
            });
        });
    },

    // détails d'un Pokémon
    pokemonPage: (request, response) => {
        const pokemonId = parseInt(request.params.id, 10);
        dataMapper.getOnePokemon(pokemonId, (error, results) => {
            if (error) {
                return response.status(500).send(error);
            }
            const pokemon = results.rows[0];
            dataMapper.getPokemonTypes(pokemonId, (error, results) => {
                if (error) {
                    return response.status(500).send(error);
                }
                const types = results.rows;
                response.render('details', {
                    pokemon,
                    types
                });
            });
        });

    },

    // affichage des types
    typePage: (request, response) => {
        dataMapper.getAllTypes( (error, results) => {
            if (error) {
                return response.status(500).send(error);
            }
            response.render('types', {
                types: results.rows
            });
        });
    },

    // affichage des Pokemon par type
    filterPage: (request, response) => {
        const type = request.params.type;
        dataMapper.getPokemonByType(type, (error, results) => {
            if (error) {
                return response.status(500).send(error);
            }
            response.render('list', {
                pokemons: results.rows
            });
        });
    }
};

// exportation du controller
module.exports = mainController;