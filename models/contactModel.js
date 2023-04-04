const mongoose = require('mongoose')
mongoose.set("debug", true);
mongoose.set("strictQuery", false);

const contactSchema = new mongoose.Schema({
    name: {type: String,  required: false},
    contact: {type: Number, required: false},
   
},{timestamps: true})

const Contact = mongoose.model("Contact", contactSchema);
 
module.exports = Contact;