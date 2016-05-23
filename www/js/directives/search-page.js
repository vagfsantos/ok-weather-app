(function(okweather){
  okweather.app.directive('searchPage', function(){
    var ddo = {};

    ddo.restrict = 'E';
    ddo.templateUrl = 'templates/search-page.html';

    return ddo;
  });
})(window.okweather);
