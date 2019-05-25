const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  ingredients: {
    type: Array,
    required: true
  }

})

module.exports = Recipe = mongoose.model("Recipe", RecipeSchema);