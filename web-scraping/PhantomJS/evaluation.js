var page = require('webpage').create();
page.open('https://tonyiversonlin.000webhostapp.com/', function(status){
	var title = page.evaluate(function(){
		return document.title;
	});
	console.log('Page title is ' + title);
	//phantom.exit();
})

//loging message from the web page context;
var page1 = require('webpage').create();
page1.onConsoleMessage = function(msg){
	console.log('The Page title is ' + msg);
}
page1.open('https://tonyiversonlin.000webhostapp.com/', function(status){
	page1.evaluate(function(){
		console.log(document.title); //logging message from the web page
	});
	phantom.exit();
})