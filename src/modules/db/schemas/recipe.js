const mongoose = require("mongoose");
const { Schema } = mongoose;
const uniqueValidator = require("mongoose-unique-validator");
const ObjectId = mongoose.Schema.Types.ObjectId;

const recipeSchema = new Schema({
  id: ObjectId,
  name: { type: String, required: true, unique: true },
  description: String,
  image: String,
  patches: [Object]
});

recipeSchema.set("timestamps", true);
recipeSchema.plugin(uniqueValidator);

const recipe = mongoose.model("recipe", recipeSchema);

module.exports = recipe;
