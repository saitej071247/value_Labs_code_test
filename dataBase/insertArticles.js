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

async function insertArticle(articles) {
    knex('articles').select()
        .where('title', articles.title)
        .then(function (rows) {
            if (rows.length === 0) {
                knex('articles').insert({
                        title: articles.title,
                        Description: articles.description,
                        Url: articles.url,
                        PublishedAt: articles.publishedAt,
                        Source: articles.source
                    }).then(() => console.log("articles inserted"))
                    .catch((err) => {
                        console.log(err);
                        throw err
                    })
                    .finally(() => {
                        knex.destroy();
                    });
            }
        });
}

module.exports = insertArticle;