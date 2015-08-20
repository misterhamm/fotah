angular.module('fotah', ['ngMessages', 'ngAnimate'])
    
    .config(function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
    })
    
    .controller('fotahCtrl', function($scope, $http, $sce) {
        $http.get('https://api.instagram.com/v1/tags/kids/media/recent?client_id=69d05db321f94129af87c8b5f2eb614a&count=15');
        console.log(data.
});
    
    
    
    
    
    
    
    
    
       /* $scope.embedUrl = "https://api.instagram.com/v1/tags/kids/media/recent?client_id=69d05db321f94129af87c8b5f2eb614a&count=15";
        
        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        };
        
        $scope.searchInstagram = function(keyword) {
            
            $scope.keyword = keyword;
            
            var url = "https://api.instagram.com/vi/tags/";
            var request = {
                q: keyword,
                client_id: "69d05db321f94129af87c8b5f2eb614a",
                count: 15
            };
            
            $http({
                method: GET,
                url: url,
                params: request
            })
            
                
});




	$scope.searchInstagram = function(keyword) {
			
  	$scope.keyword = keyword;

	  var url = "http://www.youtube.com/embed/";
	  var request = {
		  key: "AIzaSyBIT2homLIII4fhIFO1ePwQDKA_rm2Ym30",
		  part: "snippet",
		  maxResults: 10,
		  order: "viewCount",
		  q: keyword,
		  type: "video",
		  videoEmbeddable: true,
	  };

	  $http({
		  method: 'GET',
		  url: url,
		  params: request
	  })
	  .success(function(data) {
		  $scope.results = data.items;
	  })
	  .error(function() {
		  alert('error');
	  });
  };

});*/