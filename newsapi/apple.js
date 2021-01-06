const getNewsData = require('./newsapi/index');
const insertArticles = require('../dataBase/insertArticles');

async function computeAppleArticles() {
    try {
        let articles = await getNewsData('Apple');
        await insertArticles(articles);
    } catch (error) {
        console.log(error);
    }

}
module.export = computeAppleArticles;