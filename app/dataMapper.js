const { pokemonPage } = require('./controllers/mainController');
// importation du client
const client = require('./database');

const dataMapper = {

    // récupère tous les Pokémons
    getAllPokemon: (callback) => {
        client.query(`SELECT * FROM "pokemon"`, (callback));
    },

    // récupère les infos d'un Pokémon 
    getOnePokemon: (id, callback) => {
        client.query(`SELECT * FROM "pokemon" WHERE "id"=$1`, [id], (callback));
    },

    getPokemonTypes: (id, callback) => {
        client.query(`
        SELECT type.name AS type 
        FROM pokemon 
        JOIN pokemon_type 
        ON pokemon.numero=pokemon_type.pokemon_numero
        JOIN type 
        ON pokemon_type.type_id=type.id
        WHERE pokemon.id=$1`,
        [id], (callback));
    }
};

// exportation du dataMapper
module.exports = dataMapper;


