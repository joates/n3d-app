var test = require('tape')
	, http = require('http')

	, port = 8000
	, host = 'http://localhost:'+ port

test('server is running.', function (t) {

		var url = host
    t.plan(2)

    // request the docroot..
    url = host +'/index.html'
		http.get(url, function(res) {
  		t.equal(res.statusCode, 200)
		});

		// request a javascript file..
		url = host +'/main.js'
		http.get(url, function(res) {
  		t.equal(res.statusCode, 200)
		});

});
