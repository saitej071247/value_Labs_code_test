const getNewsData = require('./index');
const insertArticles = require('../dataBase/insertArticles');

async function computeAppleArticles() {
    try {
        let articles = await getNewsData('Apple');
        console.log(articles);
        await insertArticles(articles);
    } catch (error) {
        console.log(error);
    }

}
module.exports = computeAppleArticles;