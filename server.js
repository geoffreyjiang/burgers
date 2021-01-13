const express = require('express');
const eHandle = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 8080;
const router = require("./controllers/controller");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.engine('handlebars', eHandle({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(router)

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);