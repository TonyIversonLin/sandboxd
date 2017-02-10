var page = require('webpage').create();

page.open('https://tonyiversonlin.000webhostapp.com/', function(status){
	console.log('Status: ' + status);
	if(status==='success'){
		page.render('tony.png');
		console.log(page.plainText);
	}
	phantom.exit();
});