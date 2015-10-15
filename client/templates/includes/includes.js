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
});

Template.registerHelper('getAvg', function(reviews){
	if (reviews.length === 0) {
		return 0;
	};
	sum = 0;
	for(var i=0; i<reviews.length; i++){
		sum += parseInt(reviews[i].rating, 10);
	}
	var avg = sum / reviews.length;

	return Math.round(avg);
})