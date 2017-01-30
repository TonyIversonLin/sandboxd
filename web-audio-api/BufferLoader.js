function BufferLoader(context, urls){
	//return a new promise
	let promiseArray = [];

	for(let i=0; i<urls.length;i++){

		let url = urls[i];

	  let promise = new Promise(function(resolve,reject){
	  	let request = new XMLHttpRequest();
	  	request.responseType = 'arraybuffer';
	  	request.open('GET', url, true);
			request.onload = function(){
					if(this.status===200){
						context.decodeAudioData(request.response,function(bufferData){
						resolve(bufferData);
						});
					}else reject(Error(this.statusText));
				}  
			request.onerror = function(){
				reject('Network Issue!');
			};
			request.send();
	  });
	  
	  promiseArray.push(promise);
	}

	return Promise.all(promiseArray);
}
