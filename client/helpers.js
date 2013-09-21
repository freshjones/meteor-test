Handlebars.registerHelper('getSession', function(value) {
	console.log('hi');
    return Session.get(value);
});