const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const bodyParser = require("body-parser");

// route paths
const newsRoute = require('./src/routes/news');

app.use(bodyParser.urlencoded({ extended: true }));

// views path
app.set("views", path.join(__dirname, "./src/views"));
app.set("view engine", "ejs");

// public path
app.use(express.static(path.join(__dirname, "public")));

// route handlers
app.use("/", newsRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
