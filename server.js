const createTable = require('./dataBase/createNewsTable');
const computeBitcoinData = require('./newsapi/bitcon');
const computeCovidData = require('./newsapi/covid');
const computeAppleData = require('./newsapi/apple');
const computeMLData = require('./newsapi/machineLearning');

createTable().then(() => console.log("table created"));

function scheduleArticle() {
    setInterval(async function () {
        try {
            console.log(computeBitcoinData);
            await computeBitcoinData();
            await computeCovidData();
            await computeMLData();
            await computeAppleData();
        } catch (error) {
            console.log(error)
        }
    }, 1000);
}

scheduleArticle();