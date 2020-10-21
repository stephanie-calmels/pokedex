// importation du client
const client = require('./database');

const dataMapper = {

    // récupère tous les Pokémons
    getAllPokemon: (callback) => {
        client.query(`SELECT * FROM "pokemon"`, (callback));
    }
};

// exportation du dataMapper
module.exports = dataMapper;
