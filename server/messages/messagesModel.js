/* Messages Documents Schema */
var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
  trip_id: { type : String, index : true },
  username: String,
  message: String,
  createdAt: { type : Date, default : Date.now }
});

module.exports = mongoose.model('Message', messageSchema);
