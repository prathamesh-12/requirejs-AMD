requirejs.config({
	baseUrl : 'calculator'
});

require(['add', 'subtract', 'square'], function(add, sub, square) {
	console.log("ADD-----", add(4, 5));
	console.log("Sub-----", sub(5, 3));
	console.log("Square----", square(6));
});