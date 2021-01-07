const getNewsData = require('./index');
const insertArticles = require('../dataBase/insertArticles');

async function computeBitcoinArticles() {
    try {
        let articles = await getNewsData('bitcoin');
        console.log(articles);
        await insertArticles(articles);
    } catch (error) {
        console.log(error);
    }

}
module.exports = computeBitcoinArticles;