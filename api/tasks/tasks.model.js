const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
   
    name: {
      type: String,
      unique: false,
      required: true,
    },
    description: {
      type: String,
      unique: false,
      required: false,
    },
    due: {
      type: String,
      unique: false,
      required: false,
    },
    status: {
      type: String,
      unique: false,
      required: false,
    },
    listId: {
      type: mongoose.Types.ObjectId,
    }
              
})
      
module.exports = tasksSchema;