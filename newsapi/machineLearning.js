const getNewsData = require('./newsapi/index');
const insertArticles = require('../dataBase/insertArticles');

async function computeMLArticles() {
    try {
        let articles = await getNewsData('Machine Learning');
        await insertArticles(articles);
    } catch (error) {
        console.log(error);
    }

}
module.export = computeMLArticles;