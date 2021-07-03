const checkValidateInputOfVariable = function(singleItemOfVariable) {

	const newSingleItemOfVariable = singleItemOfVariable;
	
	// remove extra spaces
	// newSingleItemOfVariable.trim();

	// check user variable ragex
	const variableTestingExp = (/[\w\-][' ']*=[' ']*[\w\-]/)
		.test(newSingleItemOfVariable);
		
	// check is validate input
	if (newSingleItemOfVariable && variableTestingExp) {

		return newSingleItemOfVariable;
	}
}

const isValueTypeNumber = function(obj) {
	// get full object
	var object = obj;

	// array of object key
	var objectKey = Object.keys(object)

	// loop for parse all object item
	for (var i = 0; i < objectKey.length; i++) {

		// check all value have number formats string
		if (isNaN(obj[objectKey[i]])) {

			obj[objectKey[i]] = obj[objectKey[i]]
		} else {

			// convert string to number
			obj[objectKey[i]] = Number(obj[objectKey[i]])
		}
	}

	// return dotdev object
	return object;

}

// exports
module.exports = {
	checkValidateInputOfVariable,
	isValueTypeNumber
}