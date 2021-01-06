const options = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'user12',
        password: 'userpaaswd',
        database: 'mydb'
    }
}

const knex = require('knex')(options);

async function createArticalTable() {

knex.schema.createTable('articles', (table) => {
        table.increments('id')
        table.string('title')
        table.string('Description')
         table.string('Url')
          table.string('PublishedAt')
           table.string('Source')
    }).then(() => console.log("table created"))
    .catch((err) => {
        console.log(err);
        throw err
    })
    .finally(() => {
        knex.destroy();
    });
}
module.exports = createArticalTable;