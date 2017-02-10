var page = require('webpage').create();
page.onResourceRequested = function(request){
	console.log('Request ' + JSON.stringify(request, undefined, 4));
};
page.onResourceReceived = function(response){
	console.log('Receive ' + JSON.stringify(response, undefined, 4));
};
page.open('https://tonyiversonlin.000webhostapp.com/',function(status){
	if(status!==success) console.log('fail to load the address');
	else phantom.exit();
});