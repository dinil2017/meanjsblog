'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Expense Schema
 */
var ExpenseSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Expense name',
    trim: true
  },
  expenseBy: {
    type: String,
    default: '',
    required: 'Please fill Expense by',
    trim: true
  },
  amount : {
    type: Number,
    required: 'Please fill Amount',
    default:0
  },  
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Expense', ExpenseSchema);
