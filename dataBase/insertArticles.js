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

async function insertArticle(articles){
knex('articles').insert(articles).then(() => console.log("articles inserted"))
    .catch((err) => {
        console.log(err);
        throw err
    })
    .finally(() => {
        knex.destroy();
    });
}

module.exports = insertArticle;

