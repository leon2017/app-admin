const mongoose = require('mongoose')
const Schema = mongoose.Schema

const internationnalSchema = new mongoose.Schema({
  "name": String,
  "values": [
      {
          "internationnalKey": String,
          "countrys": [
              {
                "country": String,
                "text": String
              }
          ]
      }
  ]
})
module.exports = mongoose.model('Internationnal', internationnalSchema)