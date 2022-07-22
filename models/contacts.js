const {Schema, model} = require('mongoose')

const constactsSchema = new Schema ({
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  }, {versionKey: false})


  const Contacts = model('contacts', constactsSchema)
  
  module.exports = Contacts
