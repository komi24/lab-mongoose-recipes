const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const data = require('./data.js');


const RecipeSchema = Schema({
  "title": {
    type: String, 
    unique: true, 
    required: true
  },
  "level": {
    type: String, 
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]
  },
  "ingredients": {type: Array},
  "cuisine": {
    type: String, 
    required: true
  },
  "dishType": {
    type: String, 
    enum: ["Breakfast", "Dish", "Snack", "Drink","Dessert", "Other"]
  },
  "image": {type: String, default:"https://images.media-allrecipes.com/images/75131.jpg"},
  "duration": {type: Number, min: 0},
  "creator": {type: String},
  "created": {type: Date, default: Date.now()}
})


const Recipe = mongoose.model('recipe', RecipeSchema)


// mongoose.connect('mongodb://localhost/recipeApp')
//   .then(() => {
//     console.log('Connected to Mongo!');
//     Recipe.remove({})
//     .then(_ => {
//       return Recipe.create({
//         "title": "Hello",
//         "level": "Easy Peasy",
//         "ingredients": ["beure", "sel"],
//         "cuisine": "francaise",
//         "dishType": "Snack",
//         "duration": 50,
//         "creator": "Paul Boccuse",
//       })
//     })
//     .then(_ => {
//       return Recipe.create(data)
//     })
//     .then(created_recipe => {
//       return Recipe.update({level: "Amateur Chef"}, {$set: {duration: 100}}, {multi: true})
//     })
//     .then(_ => {
//       return Recipe.remove({title: "Carrot Cake"})
//     })
//     .then(created_recipe => {
//       console.log(created_recipe)
//       mongoose.connection.close()
//     })
//     .catch(err => {
//       console.log("Erreur", err)
//       mongoose.connection.close()
//     })

//   }).catch(err => {
//     console.error('Error connecting to mongo', err);
//   });


module.exports = Recipe;
// let myPromise = new Promise((resolve, reject) => {
//   // Tu fais une opération
//   if (error) {
//     reject(error)
//   }
//   // Succes
//   resolve(ma_liste_de_produits)
// })


// myPromise
// .then(results => console.log(results))
// .catch(error => console.log(error))


// function Create(data) {

//   return new Promise((resolve, reject) => {

//   })
// }

// create.then()
// create("bonjour").then()