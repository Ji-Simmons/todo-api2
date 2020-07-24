const mongoose = require('mongoose');

const listsSchema = new mongoose.Schema({
  
  
    name: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      unique: false,
      required: false,
    }            
})
      
module.exports = listsSchema;