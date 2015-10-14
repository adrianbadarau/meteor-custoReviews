// Categories
Categories = new Mongo.Collection('Categories');

// Products
Products = new Mongo.Collection('products');

// Images
ProductImages = new FS.Collection("product_images",{
	stores: [new FS.Store.GridFS("product_images")]
})

