const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)
mongoose.connect(
  'enter link to database here',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  pass: {
    type: String,
    required: true,
    index: true
  },
  type: String,
  verified: Boolean,
  verifyRand: {
    type: String,
    index: true
  },
  verifyUntil: Number,
  resetRand: {
    type: String,
    index: true
  },
  resetUntil: Number
})

module.exports = mongoose.model('User', UserSchema)
