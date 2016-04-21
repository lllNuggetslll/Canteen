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
      trip_id: req.body.tripId,
      username: req.body.username,
      message: req.body.message,
    }, function (err, message) {
      // at this point, broadcast chat msg to all users in a given trip room
      next(err, message);
    });
  }

};
