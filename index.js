const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const Recipe = require("./recipes");

const bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost/recipeApp');

let app = express()

// app.use((req, res, next) => {
//   console.log("hello")
//   next()
// })
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res, next)=>{
  Recipe.find()
  .then(recipes => {
    res.render("index", {recipes: recipes})
  })
})


app.get('/newRecipe', (req, res, next)=>{
  res.render("newRecipe")
})

app.post('/createRecipe', (req, res, next)=>{
  console.log(req.body)
  res.render("newRecipe")
})

app.get('/recipe/:id', (req, res, next)=>{
  console.log("hello")
  Recipe.find({_id: req.params.id})
  .then(result => {
    console.log("hello1")
    res.send(result)
  })
  .catch(err => {
    console.log("hello2")
    res.send(err)
  })
})

app.listen(3000, ()=>{
  console.log("Le serveur a démarré")
})