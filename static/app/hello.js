define(function(require, exports){

	var world = require("app/world");

	exports.increment = function(a){

		return world.add(a, 1);
	};
});