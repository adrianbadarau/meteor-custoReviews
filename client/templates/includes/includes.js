Template.footer.helpers({
	year: function () {
		return new Date().getFullYear();
	}
});

Template.sidebar.helpers({
	categories: function () {
		return Categories.find({}, {
			sort: {name: 1},
		});
	}
});

Template.registerHelper('truncateText', function(text, length){
	var newText = text.substring(0, length);
	newText = newText.substr(0, Math.min(newText.length, newText.lastIndexOf(" ")));
	newText = newText.concat("[ ... ]");
	return new Spacebars.SafeString(newText);
})