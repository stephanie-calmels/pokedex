// importation du client postgres
const {Client} = require('pg');

// création d'un nouveau client
const client = new Client(process.env.PG_URL);

// connection à la BDD
client.connect();

// exportation
module.exports = client;
