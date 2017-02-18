//Nav & Auto
var casper = require('casper').create();
casper.start('https://tonyiversonlin.000webhostapp.com/');

casper.then(function(){
	this.echo('First Page: ' + this.getTitle());
	console.log(this===casper);
});

casper.thenOpen('http://phantomjs.org', function(){
	this.echo('Second Page: ' + this.getTitle());
});

//Scraping
var link;
casper.thenOpen('https://tonyiversonlin.000webhostapp.com/', function(){
	links = this.evaluate(function(){
			var links = document.querySelectorAll('.project a');
			return Array.prototype.map.call(links, function(e){
				return e.getAttribute('href')
			});
	});
})

casper.run(function(){
	for(var i in links){
		console.log(links[i]);
	}
	casper.done();
});

