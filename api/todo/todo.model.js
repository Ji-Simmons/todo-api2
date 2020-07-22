const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
        list: String,
        description: String,
        listitems: {
          task: [],
          duedate: [], 
          completed: Boolean
        }
      },
      { timestamps: true }
);



  module.exports = todoSchema;