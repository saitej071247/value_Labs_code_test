const getNewsData = require('./newsapi/index');
const insertArticles = require('../dataBase/insertArticles');

async function computeCovidArticles() {
    try {
        let articles = await getNewsData('covid');
        await insertArticles(articles);
    } catch (error) {
        console.log(error);
    }

}
module.export = computeCovidArticles;