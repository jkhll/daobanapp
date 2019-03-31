const mongoose = require('mongoose')
const config = require('config-lite')(__dirname)

mongoose.connect(config.mongodb)

var users = mongoose.Schema({
  name: {type: String, unique: true, index: true},
  password: String,
  email: String
})

exports.user = mongoose.model('user', users)
