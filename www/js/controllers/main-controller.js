(function(okweather){
  okweather.app.controller('MainController', function($scope, $http){
    $http({
    	method: 'GET',
    	url:'https://okweather.herokuapp.com/'
    })
    .then(
    	function(data){
    		console.log(data);
    	}, function(error){
    		console.log(error);
    	}
    );
  });
})(window.okweather);
