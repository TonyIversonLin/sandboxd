function Cow(){
	this.mowed = false;
	this.moo = function(){
		this.mowed = true;
		return 'moo!';
	};
}

casper.test.begin('Cow can moo', 2, function(test){
	var cow = new Cow();
	test.assertEquals(cow.moo(), 'moo!');
	test.assert(cow.mowed);
	test.done();
});