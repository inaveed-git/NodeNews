const express = require("express");
const axios = require("axios");
const newsRoute = express.Router();

newsRoute.get('/', async (req, res) => {
    
    const apiKey = 'YOUR_API_KEY';
    try {
    const newsData = await axios.get(`https://newsapi.org/v2/everything?q=elonmusk&apiKey=${apiKey}`);
        res.render("news.ejs", { articles: newsData.data.articles });
    } catch (error) {
        console.error("Error fetching news:", error.message);
        res.status(500).send("Internal Server Error");
    }
});

newsRoute.post('', async (req, res) => {
    try {
        const search = req.body.q;
        const newsData = await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=0c68b9288fe1421db0718f6334054ce7`);
        res.render("news.ejs", { articles: newsData.data.articles });
    } catch (error) {
        console.error("Error fetching news:", error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = newsRoute;
