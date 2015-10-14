Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function () {
	// Homepage
	this.route('home', {
		path: '/',
		template: 'home',
		data: function () {
			templateData = {
				products: Products.find({is_featured:"1"})
			}

			return templateData;
		}
	});
	// Products
	this.route('products',{
		path: '/products',
		template: 'products',
		data: function(){
			templateData = {
				products: Products.find()
			};

			return templateData;
		}
	});
	this.route('add-review', {
		path: '/add-review',
		template: 'addReview',
		data: function(){
			templateData = {
				categories: Categories.find({})
			}

			return templateData;
		}
	});
	this.route('category_products',{
		path:"/categories/:slug",
		template:'category_products',
		data: function(){
			templateData = {
				products: Products.find({
					category: this.params.slug
				}),
				categoryName: this.params.slug,
			};

			return templateData;
		}
	})
});