// Lists -- {name: String}
Projects = new Meteor.Collection("projects");

// Publish complete set of lists to all clients.
Meteor.publish('projects', function () {
  return Projects.find();
});