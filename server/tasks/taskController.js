var Task = require('./taskModel.js');

module.exports = {
  addTask: function(req, next) {
    var task = req.body;
    var newTask = {
      tripId: req.params.tripId,
      statusCode: task.statusCode,
      taskName: task.taskName,
      description: task.description,
      category: task.category,
      assignedTo: task.assignedTo.email
    }
    Task.create(newTask, function(err) {
      next(err, newTask);
    });

  },

  updateTask: function(req, next) {
    var task = req.body
    Task.findByIdAndUpdate(task._id, task)
      .exec(function(err, task){
        next(err,task);
      })
  },

  getAllTasks: function(req, next) {
    Task.find({ tripId: req.params.tripId })
      .exec(function(err, tasks) {
        next(err, tasks);
      })
  }
}



// Using query builder
// Person.
// find({ occupation: /host/ }).
// where('name.last').equals('Ghost').
// where('age').gt(17).lt(66).
// where('likes').in(['vaporizing', 'talking']).
// limit(10).
// sort('-occupation').
// select('name occupation').
// exec(callback);
