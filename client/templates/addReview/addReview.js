Template.addReview.events({
	'submit #addReview': function (event) {
		event.preventDefault();

		var name = event.target.name.value;
		var category = event.target.category.value;
		var description = event.target.description.value;
		var is_featured = event.target.is_featured.value;

		var file = $('#productImage').get(0).files[0];
		if(file){
			fsFile = new FS.File(file);
			ProductImages.insert(fsFile, function(err, res){
				if(!err){
					var productImg = '/cfs/files/product_images/'+res._id;
					Products.insert({
						name: name,
						category: category,
						description: description,
						is_featured: is_featured,
						image:productImg,
						createdAt: new Date(),
					});
				}

			});
		}else{
			Products.insert({
				name:name,
				category:category,
				description: description,
				is_featured: is_featured,
				image: '/img/noImage.png',
				createdAt: new Date(),
			});	
		}

		event.target.name.value = "";
		event.target.category.value = "";
		event.target.description.value = "";
		event.target.is_featured.value = "";

		FlashMessages.sendSuccess("Review Added");
		Router.go("/");
	}
});