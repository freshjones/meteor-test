// ID of currently selected list
Session.setDefault('showModal', null);

//create a new collection client-side
Projects = new Meteor.Collection("projects");

var projectsHandle = Meteor.subscribe('projects');

Template.projectlist.loading = function () {
	  return !projectsHandle.ready();
};

Template.projectlist.projects = function () {
	  return Projects.find();
};