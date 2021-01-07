const getNewsData = require('./index');
const insertArticles = require('../dataBase/insertArticles');

async function computeCovidArticles() {
    try {
        let articles = await getNewsData('covid');
        console.log(articles);
       await insertArticles(articles);
    } catch (error) {
        console.log(error);
    }

}
module.exports = computeCovidArticles;