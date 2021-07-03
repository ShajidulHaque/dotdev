const getPath = function(path) {
	
	// parse path
	var parsePath = path.split('/');
	
	// delete dotdev folder name on path
	delete parsePath[parsePath.length - 1];
	
	// get full path
	const fullPath = `${parsePath.join('/')}dev.env`
	
	// return full path
	return fullPath;
	
}

// exports
module.exports = {
	getPath,
}