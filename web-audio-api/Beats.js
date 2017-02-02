function Beats(buffers){
	this.beat1 = buffers[0];
	this.beat2 = buffers[1];
	this.beat3 = buffers[2];
	this.gainNode = context.createGain();
	this.gainNode.gain.value = 1;   //default
	this.gainNode.connect(context.destination);
}

Beats.prototype.playSound = function(buffer,time) {
	let source = context.createBufferSource();
	source.buffer = buffer;
	source.connect(this.gainNode);
	source.start(time);
}

Beats.prototype.playSheet = function() {
	let eightNoteTime = 0.3;
	let startTime = context.currentTime;

	for(let bar = 0; bar<2; bar++){
		let time = startTime + bar * 8 * eightNoteTime;

		this.playSound(this.beat1, time);
		this.playSound(this.beat1, time + 4 * eightNoteTime);

		this.playSound(this.beat2, time + 2 * eightNoteTime);
		this.playSound(this.beat2, time + 6 * eightNoteTime);

		for(let i=0; i<8; ++i){
			this.playSound(this.beat3, time + i * eightNoteTime);
		}
	}
}