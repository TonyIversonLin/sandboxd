var page = require('webpage').create();
page.viewportSize = { width: 1440, height: 536};
page.clipRect = {top: 0, left: 0, width:1440, height: 536};
page.open('https://tonyiversonlin.000webhostapp.com/',function(status){
	if(status==='success'){
		console.log('Capturing successful')
		page.render('Tony-highlight.png');
	}
	phantom.exit();
})