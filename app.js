var app = require('./_server/config/express')();
var http = require('http');
var json = require("simple-xml2json");
var iconv = require('iconv-lite');

app.listen(3000, function(){
	console.log('servidor ok...');
});


app.get('/', function(req, res){
	var weather = '';

	var options = {
		hostname:'servicos.cptec.inpe.br',
		path:'/XML/capitais/condicoesAtuais.xml',
		encoding: null,
		headers:{
			'Content-Type': 'application/xml;charset=utf-8'
		}
	}
	
	http.get(options, function(response, body){
        response.on('data', function (chunk) {
            weather += chunk;
        });

        response.on('end', function() {
        	var utf8String = iconv.decode(new Buffer(weather), "UTF-8");
			var result = json.parser( utf8String );
		    res.send(result);

            console.log('ok');
	    }).on('error', function (e) {
	        console.log('problem with request: ' + e.message);
	    });
	});

});

