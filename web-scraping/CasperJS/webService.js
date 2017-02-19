var serverIP = '127.0.0.1:9000';
var server = require('webserver').create();
var casper = require('casper').create();

var service = server.listen(serverIP, function(req, res){
	var link = [];

	function getLinks(){
		var links = document.querySelectorAll('h3.r a');
		return Array.prototype.map.call(links,function(link){
			return link.getAttribute('href');
		});
	}

casper.start('http://google.com/', function(){
		this.fill('form[action="/search"]',{q: req.postRaw}, true);
	});
	casper.then(function(){
		links = this.evaluate(getLinks);
	});
	casper.run(function(){
		res.statusCode = 200;
		res.write(JSON.stringify(links, null, null));
		res.close();
	});
});

console.log('Server running at http://' + serverIP + '/' )