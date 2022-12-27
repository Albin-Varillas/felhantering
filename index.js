const express = require("express");
const app = express();
require("dotenv").config();

const url = process.env.MONGODB_URL;

function main() {
  console.log(url);
  const users = ["adam", "filip", "gunnart"];

  app.get("/users/:name", function (req, res) {
    try {
      const user = users.find((name) => name === req.params.name);

      if (!user) {
        res.status(404).send("did not find user");
        return;
      }

      console.log("på rad 18");

      res.send(user);
    } catch (error) {
      console.log("Något gick fel");
      res.status(500).send("ojoj det gick inte ");
    }
  });
  app.listen(3000);
}

main();
