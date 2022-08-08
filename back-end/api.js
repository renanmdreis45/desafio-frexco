const axios = require("axios");

const api = axios.create({
    baseURL: "https://www.fruityvice.com",
});

module.exports = api;