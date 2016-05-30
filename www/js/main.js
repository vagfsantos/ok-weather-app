(function(okweather){
  okweather.app = angular.module('okweather', []);
  //console.log(okweather);
})( window.weather || (window.okweather = {}) );


window.onload = function(){
	$.ajax({
		method:'get',
		url:'https://okweather.herokuapp.com/',
		//contentType: "application/json",
		dataType: 'jsonp',
		success: function(data){
			console.log(data);
		},
		error: function(e,a,j){
			console.log(e);
			console.log(a);
			console.log(j);
		}
	})
}

