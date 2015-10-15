Meteor.methods({
	addProduct: function (file, name, category, description, is_featured) {
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
	},
	addReview: function(id, rating, body){
		Products.update({
			_id: id
		}, {
			$push:{
				reviews: {
					rating: rating,
					body: body,
					reviewDate: new Date()
				}
			}
		});
	}
})