// Events

Template.newReview.events({
	'submit #newReview': function (event) {
		event.preventDefault();
		var rating = event.target.rating.value;
		var body = event.target.body.value;

		Products.update({
			_id: this._id
		}, {
			$push:{
				reviews: {
					rating: rating,
					body: body,
				}
			}
		});

		FlashMessages.sendSuccess('Review Added');
		Router.go('/');
	}
});