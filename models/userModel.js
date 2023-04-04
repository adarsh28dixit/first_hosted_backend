const mongoose = require('mongoose')
mongoose.set("debug", true);
mongoose.set("strictQuery", false);

const userSchema = new mongoose.Schema({
    email: {type: String, required: false},
    password: {type: String, required: false},
},{timestamps: true})

const User = mongoose.model("User", userSchema);
 
module.exports = User;