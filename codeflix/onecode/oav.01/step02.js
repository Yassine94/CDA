const express = require("express");
const sqlite = require("sqlite3");
const bodyParser = require("body-parser");
const db = new sqlite.Database("myPocket");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.serialize(function() {
  db.run(
    "CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, nickname Text, email Text, password text)"
  );
});

app.get("/user", function(req, res) {
  db.all("SELECT * from user", (err, row) => {
    res.json(row);
  });
});

app.get("/user/:id", function(req, res) {
  const idSelected = req.params.id;

  db.get(`SELECT * from user where id = ${idSelected}`, (err, row) => {
    res.json({
      id: idSelected,
      nickname: row.nickname,
      email: row.email,
      password: row.password
    });
  });
});

app.delete("/user/:id", function(req, res) {
  const idSelected = req.params.id;
  console.log(idSelected);
  db.get(`DELETE  from user where id = ${idSelected}`, (err, row) => {
    if (err) throw err;
    res.send(`User has been successfully deleted :{"id" : ${idSelected}`);
  });
});

app.post("/user", function(req, res) {
  const data = {
    nickname: req.body.nickname,
    email: req.body.email,
    password: req.body.password
  };

  console.log(data);
  db.run(
    `INSERT INTO user (nickname,email,password)
  VALUES('${data.nickname}',
         '${data.email}',
         '${data.password}')`,
    err => {
      if (err) throw err;
    }
  );
  res.end();
});

app.put("/user", function(req, res) {
  const data = {
    id: req.body.id,
    nickname: req.body.nickname,
    email: req.body.email,
    password: req.body.password
  };

  db.run(
    `UPDATE user set
            nickname = '${data.nickname}',
            email = '${data.email}',
            password = '${data.password}'
            WHERE id = '${data.id}'`,
    err => {
      if (err) throw err;
    }
  );
  res.end();
});

app.listen(1818);
