angular.module('fotah', ['ngMessages', 'ngAnimate'])

    
    .config(function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    })
    
    .controller('fotahCtrl', function($scope, $http, $sce) {
        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        };    
        
        $scope.searchInstagram = function(keyword, url) {
            
            $scope.loading = true;
            $scope.keywordDisplay = $scope.keyword;
            
            if (url == undefined ) {
                var searchUrl = "https://api.instagram.com/v1/tags/" + keyword + "/media/recent";
            }
            
            else {
                var searchUrl = $scope.moreResults
            }
            
            var request = {
                client_id: "69d05db321f94129af87c8b5f2eb614a",
                count: 15,
                callback: 'JSON_CALLBACK'
            };
            
            setTimeout(function() {
            $http({
                method: 'JSONP',
                url: searchUrl,
                params: request
            })
            
            .then(function(results) {
                if (results.data.meta.code == 200) {
                    $scope.photos = results.data.data;
                    $scope.resultsLength = $scope.photos.length;
                    if (results.data.pagination.next_url) {
                        $scope.loading = false;
                        $scope.more = true;
                        $scope.found = true;
                        $scope.moreResults = results.data.pagination.next_url;
                    }
                }
                else {
                    $scope.error = true;
                    $scope.error = results.data.meta.error_message;
                    return false;
                }
            },
            
            function(results) {
                alert('error');
            });
            
            /*$scope.showResults = false;*/
            
            $scope.keyword = "";
        }, 2000)
        }
            
        $scope.keyInput = function(enterKey, keyword) {
            if (enterKey.keyCode != 13) {
                return false;
            }
            else {
                $scope.searchInstagram(keyword);
            }
                
        }
        
        
            
        
});
    
    
     /*$http.get('https://api.instagram.com/v1/tags/kids/media/recent?client_id=69d05db321f94129af87c8b5f2eb614a&count=15')
        .then(function(data){
                console.log(data)
        })*/
    
    
    
    
    
    
        /*$scope.embedUrl = "https://api.instagram.com/v1/tags/kids/media/recent?client_id=69d05db321f94129af87c8b5f2eb614a&count=15";
        
        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        };
        
        $scope.searchInstagram = function(keyword) {
            
            $scope.keyword = keyword;
            
            var url = "https://api.instagram.com/vi/tags/" + keyword + "/media/recent/";
            console.log(url);
            var request = {
                client_id: "69d05db321f94129af87c8b5f2eb614a",
                count: 15
            };
            
            $http({
                method: GET,
                url: url,
                params: request
            })
            
                
});*/


/*

	$scope.searchInstagram = function(keyword) {
			
  	$scope.keyword = keyword;

	  var url = "http://www.youtube.com/embed/" ;
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