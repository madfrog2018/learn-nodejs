define(function(require){

	var hello = require("app/hello");
	console.log(hello.increment(10));
	var result = [];
	var result2 = [];
	var testData = require("app/testArray");
	for (var i = 0; i < testData.data.length; i++) {
		resultData = testData.data[i++] += 2;
		result.push(resultData);
		result2Data = testData.data[i++] = testData.data[i++] + 1;
		result2.push(result2Data);
	};
	
	console.log(result);
	console.log("---------");
	console.log(result2);

});