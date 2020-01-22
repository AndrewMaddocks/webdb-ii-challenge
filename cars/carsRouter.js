const express = require("express");
const knex = require("knex");

//db represents a connection to the database
const db = knex({
  // client ansers: which type (aqlite, postgres,mysql,oracle) of database
  client: "sqlite3", //the database driver
  //connection could be a string or an object
  connection: {
    filename: "./data/car-dealer.db3"
  },
  useNullAsDefault: true //only needed for sqlite3
});

const router = express.Router();

router.get("/", (req, res) => {
  //db.select("*").from('cars).then().catch()
  db("cars")
    .then(car => {
      res.json(car);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve cars" });
    });
});
router.post("/", (req, res) => {
  const carData = req.body;
  db("cars")
    .insert(carData)
    .then(ids => {
      db("cars")
        .where({ id: ids[0] })
        .then(newCarEntry => {
          res.status(201).json(newCarEntry);
        })
        .catch(err => {
          res.status(500).json({ message: "failed to store the data" });
        });
    });
});

module.exports = router;
