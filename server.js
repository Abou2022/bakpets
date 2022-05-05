//standard server I need to call express, routes folder and sequelize I installed by npm i
const express = require("express");
//inside the (./routes) link the folder, same for sequelize
const routes = require("./routes");
const sequelize = require("./config/connection");

const app = express();
//We add process.env.PORT for the deployement on heroku
const PORT = process.env.PORT || 3001;

//midalware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//turn on routes
app.use(routes);

//turn connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

//this is generic server file usualy it is the same and it follows the general convention
