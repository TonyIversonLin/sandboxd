var system = require('system');
var env = system.env;
console.log('................. enviroment')
for(var key in env){
	if(env.hasOwnProperty(key)){
		console.log(key + '=' + env[key]);
	}
}
console.log('................. system')
for(var key in system){
	if(system.hasOwnProperty(key)){
		console.log(key + '=' + system[key]);
	}
}
console.log('................. Global')
for(var key in global){
	if(global.hasOwnProperty(key)){
		console.log(key + '=' + global[key]);
	}
}

phantom.exit();