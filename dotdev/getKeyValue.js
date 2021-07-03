const getKeyValue = function(item) {

	// split for get object key and value without "="
	var splitedItemOfArr = item.split('=');

	// get object key
	const getObjectKeyOfSplitedItemOfArr = splitedItemOfArr[0];

	// get object value
	const getObjectValueOfSplitedItemOfArr = splitedItemOfArr
		.join('=')
		.replace(getObjectKeyOfSplitedItemOfArr + '=', '')
		// remove extra space of value
		.trim();

	// keep key and value on array
	splitedItemOfArr = [];

	// push key on array
	splitedItemOfArr[0] = getObjectKeyOfSplitedItemOfArr
		// remove extra space of value
		.trim();

	//push value on arr
	splitedItemOfArr[1] = getObjectValueOfSplitedItemOfArr;

	return splitedItemOfArr;

}

// exports
module.exports = {
	getKeyValue,
}
