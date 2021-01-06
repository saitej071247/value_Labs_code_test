const axios = require('axios');

async function getNewData(query) {
const apikey = '00ea34a34541429b86253f0bc545a019'
const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apikey}`);
return response.data.articles.slice(0,9);
}

module.exports = getNewData;