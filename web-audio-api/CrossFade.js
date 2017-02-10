function CrossFade(buffers){
	this.buffers = buffers;
	this.fadeTime = 2;
	this.iterations =2;
	this.gainNode = context.createGain();
	this.gainNode.gain.value = 0.5;   //default
	this.gainNode.connect(context.destination);
}

CrossFade.prototype.playSheet = function() {
	let currTime = context.currentTime;
	for(let i=0;i<this.iterations;i++){
		for(let j=0;j<this.buffers.length;j++){
			let buffer = this.buffers[j];
			let duration = buffer.duration;
			let info = createSourceWithGain(buffer);
			let source = info.source;
			let gainNode = info.gainNode;

			gainNode.gain.linearRampToValueAtTime(0,currTime);
			gainNode.gain.linearRampToValueAtTime(1,currTime+ this.fadeTime);
			gainNode.gain.linearRampToValueAtTime(1,currTime+duration-this.fadeTime);
			gainNode.gain.linearRampToValueAtTime(0,currTime+duration);

			source.start(currTime);
			currTime += duration-this.fadeTime;
		}
	}	
};

CrossFade.prototype.createSourceWithGain = function(buffer){
	let source = context.createBufferSource();
	let gainNode = context.createGain();
	source.buffer = buffer;
	source.connect(gainNode);
	gainNode.connect(this.gainNode);

	return {
		source: source,
		gainNode: gainNode
	}	
}