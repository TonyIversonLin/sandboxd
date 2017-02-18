casper.test.begin('Google search get 10 or more result', 5, function(test){
	
	var length;
	casper.start("http://www.google.com", function(){
		test.assertTitle("Google", "this is the correct google homepage title");
		test.assertExists('form[action="/search"]', "search input form is found");
		this.fill('form[action="/search"]', {q: "casperjs"}, true);
	});

	casper.then(function(){
		test.assertTitle('casperjs - Google Search', 'google title is ok');
		test.assertUrlMatch(/q=casperjs/, 'search term has been submitted');
		test.assertEval(function(){
			return document.querySelectorAll('h3.r').length >= 10;
		}, 'google search for "casperjs" retrieves 10 or more results');
		test.done();
	});

  casper.run(function() {
    test.done();
	});
});