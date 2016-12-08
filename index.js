const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const knex = require('./db/knex');

const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log(`Listening on ${port}`);
});

app.get('/', function(req, res){
  knex('beer_table').then(function(data) {
    console.log(data);
    res.json({data});
  });
});

app.get('/:id', function(req, res){
  knex('beer_table')
  .where('id', req.params.id)
  .then(function(data) {
    res.json(data);
  });
});

app.get('/rating/:rating/abv/:abv', function(req, res){
  knex('beer_table')
  .where('rating', req.params.rating)
  .andWhere('abv', req.params.abv)
  .then(function(data) {
    res.json(data);
  });
});

app.get('/rating/:rating/or/abv/:abv', function(req, res){
  knex('beer_table')
  .where('rating', req.params.rating)
  .orWhere('abv', req.params.abv)
  .then(function(data) {
    res.json(data);
  });
});

// app.put('/:id',
// function(req, res){
//   knex('beer_table')
//   .where('id', req.params.id)
//   .update({
//     name: req.params.name,
//     brewery: req.params.brewery,
//     abv: req.params.abv,
//     rating: req.params.rating
//   })
//   .then(function(data) {
//     res.json(data);
//   });
// });
