app.controller('TracerouteCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.serverName = 'http://localhost:8080/';
    $scope.geoJson = [];
    $scope.routeTable = [];
    $scope.destination = "google.pl";

    $scope.traceroute = function(destination){
        $http.get('/tracert').then(function(res){
            $scope.geoJson = res.data[0];
            $scope.routeTable = res.data[1];
        })
    };

}]);
