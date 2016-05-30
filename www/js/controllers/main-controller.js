(function(okweather){
  okweather.app.controller('MainController', function($scope, $http){
    $http({
    	method: 'GET',
    	url:'localhost:3000'
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
