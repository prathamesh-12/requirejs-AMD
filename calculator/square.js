define(['multiply'], function(multiply) {
	return function(x) {
		return multiply(x, x);
	}
});