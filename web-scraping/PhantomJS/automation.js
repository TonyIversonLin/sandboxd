var page = require('webpage').create();
console.log('The default user agent is '+ page.settings.userAgent);
//page.settings.userAgent = 'SuperTony';

//DOM Manipulation
page.open('http://www.httpuseragent.org',function(status){
	if(status !== 'success'){
		console.log('Could not load the page');
	} else {
		var userAgent = page.evaluate(function(){
			return document.getElementById('myagent').textContent;
		});
		console.log(userAgent+'\n\n\n');
	}
	//phantom.exit();
})

//including external library
var page1 = require('webpage').create();
page1.open('https://tonyiversonlin.000webhostapp.com/',function(status){
	if(status !== 'success') console.log('Could not load the page');
	else {
		page1.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function(){
    var info = page1.evaluate(function(){
    	var projects = [];
			$(".project p:first-of-type").each(function(i,p){
				projects.push($(p).text());
			});
			return projects;
		});
		console.log(info.join('\n\n\n'));
		phantom.exit();
		});
	}
})