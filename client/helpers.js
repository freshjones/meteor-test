Handlebars.registerHelper('getSession', function(value) {
    return Session.get(value);
});