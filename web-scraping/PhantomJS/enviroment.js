var system = require('system');
var page = require('webpage').create();
var env = system.env;
var Env = [system.env, system, global, phantom, document, page];
var temp = ["Environment", "System", "Global", "Phantom", "Document", "Page"];

for(var i=0; i<temp.length;i++){
	console.log(temp.length);
	console.log('...............................' + temp[i]);
	for(var key in Env[i]){
		if(Env[i].hasOwnProperty(key)){
			console.log(key + "=" + Env[i][key]);
		}
	}
}

phantom.exit();