// Categories
Categories = new Mongo.Collection('Categories');

// Products
Products = new Mongo.Collection('products');

// Images
ProductImages = new FS.Collection("product_images",{
	stores: [new FS.Store.GridFS("product_images")]
});

ProductImages.allow({
	insert: function (userId, doc) {
		return true;
	},
	update: function (userId, doc, fields, modifier) {
		return false;
	},
	remove: function (userId, doc) {
		return false;
	},
	fetch: ['owner'],
	download: function () {
		return true;
	}
});

