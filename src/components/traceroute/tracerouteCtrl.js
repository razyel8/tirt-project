app.controller('TracerouteCtrl', ['$scope', function($scope, $http) {
    $scope.serverName = 'http://localhost:8080/';
    $scope.geoJson = [];
    $scope.destination = "google.pl";

    $scope.traceroute = function(destination){
        $http.get($scope.serverName + "tracert").then(function(res){
            $scope.geoJson = res;
        })
    };

}]);
