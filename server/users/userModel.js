/* User Documents Schema */
var mongoose = require('mongoose');

// TODO: add local authentication
// currently using only google for auth
var userSchema = mongoose.Schema({
  id: String,
  email: String,
  given_name: String,
  family_name: String,
  trip: String,
  bio: { type: String, default: 'I am a person.' },
  favorite_trips: { type: String, default: 'Disney World' }
});

module.exports = mongoose.model('User', userSchema);
