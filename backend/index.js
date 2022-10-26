const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// Connect mongoDB

mongoose
  .connect("mongodb+srv://modhussain:inazumaHussain8@cluster0.s9hinz0.mongodb.net/?retryWrites=true&w=majority")
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.reason);
  });
const bookAPI = require("../backend/routes/book.route");
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
// API
app.use("/api", bookAPI);
// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});
const createError = () => {
  console.log("error");
};
// Find 404
app.use((req, res, next) => {
  next(createError(404));
});
// error handler
app.use(function (err, req, res) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
