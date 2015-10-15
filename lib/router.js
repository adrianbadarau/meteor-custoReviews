Router.configure({
	layoutTemplate: 'layout'
});

var OnBeforeActions = {
	loginRequired: function(){
		if (! Meteor.userId()) {
			Router.go('/');
		}else{
			this.next();
		}
	}
}

Router.onBeforeAction(OnBeforeActions.loginRequired,{
	only: ['add-product', 'newReview']
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
	this.route('add-product', {
		path: '/add-product',
		template: 'addProduct',
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
	});
	this.route('newReview', {
		path: '/new-review/:_id',
		template: 'newReview',
		data: function(){
			return Products.findOne(this.params._id);
		}
	});
	this.route('productReviews', {
		path: '/product/:name/reviews',
		template: 'productReviews',
		data: function(){
			return Products.findOne({name: this.params.name});
		}
	});
});






