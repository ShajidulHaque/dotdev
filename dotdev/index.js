try {
	// import nodejs core modules
	const path = require('path');
	const fs = require('fs');

	// internal imports
	const { getKeyValue } = require('./getKeyValue');
	const { checkValidateInputOfVariable, isValueTypeNumber } = require('./validators');
const { getPath } = require('./getPath')

	// find dev.env file dirname
	const dotDevDirname = getPath(__dirname);

	// read file into dev.env file
	const readDotdevfileIntoText = fs.readFileSync(`${dotDevDirname}`, 'utf8');

	const arrayOfDevEnvItem = [];
	const destructuredJsonFormateArr = [];

	readDotdevfileIntoText
		.split(/\n/)
		.filter((singleItemOfVariable) => {
			// call checkValidateInputOfVariable function for variable validation
			return checkValidateInputOfVariable(singleItemOfVariable);

		})
		.forEach((item) => {

			// arr of object key value
			// call getKeyValue function
			const arrsrOfObjectKeyValue = getKeyValue(item);

			// push key value array on arrayOfDevEnvItem
			arrayOfDevEnvItem.push(arrsrOfObjectKeyValue);
		});

	// loop for find item of arrayOfDevEnvItem array
	for (var i = 0; i < arrayOfDevEnvItem.length; i++) {

		// loop for join key value array and destructured json formate key value 
		for (var j = 0; j < arrayOfDevEnvItem[i].length; j++) {

			// destructure json key value
			const destructuredJsonKeyValue = `"${arrayOfDevEnvItem[i].join('":"')}"`

			// push key value on destructuredJsonFormateArr
			destructuredJsonFormateArr.push(destructuredJsonKeyValue);
		}
	}

	// join destructuredJsonFormateArr and destructuring json object
	const joinedDestructuredJsonFormateArr = `{${destructuredJsonFormateArr.join(',')}}`;

	// parse json formate string
	const parseedJsonString = JSON.parse(joinedDestructuredJsonFormateArr);

	// checking has value type is string but structure as like number and converting number
	const dotdev = isValueTypeNumber(parseedJsonString);

	// export dotdev object
	module.exports = {
		dotdev,
	}

} catch (err) {

	// create a simple error
	const dotdev = {
		name: err.message,
	}

	// export dotdev object
	module.exports = {
		dotdev,
	}
}