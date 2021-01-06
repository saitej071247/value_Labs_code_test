const getNewsData = require('./newsapi/index');
const insertArticles = require('../dataBase/insertArticles');

async function computeBitcoinArticles() {
    try {
        let articles = await getNewsData('bitcoin');
        await insertArticles(articles);
    } catch (error) {
        console.log(error);
    }

}
module.export = computeBitcoinArticles;