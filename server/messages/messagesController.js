// var Trip = require('../trips/tripModel');
var Message = require('./messagesModel');

module.exports = {

  // get messages for the current trip
  getMessages: function (req, next) {
    Message.find({ trip_id: req.params.tripId })
    .exec(function (err, messages) {
      next(err, messages);
    });
  },

  // add message to chat
  addMessage: function (req, next) {
    Message.create({
      trip_id: req.params.tripId,
      username: req.session.user.given_name + ' ' + req.session.user.family_name,
      message: req.body.message,
    }, function (err, message) {
      next(err, message);
    });
  }

};
