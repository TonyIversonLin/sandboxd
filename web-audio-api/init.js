function init(){
	let context;
	let contextClass = (window.AudioContext ||
		window.webkitAudioContext ||
		window.mozAudioContext ||
		window.oAudioContext ||
		window.msAudioContext);
	if(contextClass){
		context = new contextClass();
	}else console.log('Web Audio API is not available');
	return context;
}