'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClientSchema = Schema({
  name: String,
  direction: String,
  phone: { type: Number, default: 0 },
  mail: String,
  category: { type: String, enum: ['client', 'provider', 'employe'] },
  description: String
})

module.exports = mongoose.model('Clients', ClientSchema)
