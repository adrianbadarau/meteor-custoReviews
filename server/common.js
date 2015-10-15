Meteor.publish('products', function(){
	return Products.find();
});
Meteor.publish('Categories', function(){
	return Categories.find();
});