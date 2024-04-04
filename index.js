const express = require('express');
const { Client } = require('pg');
const PORT = 3555;

const app = express();

// CONFIG DATABASE
const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});
client.connect(function(error) {
  if(error !== null) {
    console.log(error)
  } else {
    console.log("Connected to database !");
  }
})

// ROUTING

app.listen(PORT, function () {
  console.log(`Server berjalan di http://localhost:${PORT}`);
})