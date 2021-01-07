const getNewsData = require('./index');
const insertArticles = require('../dataBase/insertArticles');

async function computeMLArticles() {
    try {
        let articles = await getNewsData('Machine Learning');
        console.log(articles);
        await insertArticles(articles);
    } catch (error) {
        console.log(error);
    }

}
module.exports = computeMLArticles;