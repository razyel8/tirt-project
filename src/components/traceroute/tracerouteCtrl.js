app.controller('TracerouteCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.serverName = 'http://localhost:8080/';
    $scope.geoJson = [];
    $scope.routeTable = [];
    $scope.destination = "google.pl";
    $scope.loading = false;

    $scope.traceroute = function(destination){
        $scope.loading = true;
        $http.post('/tracert',{address: $scope.destination}).then(function(res){
            $scope.geoJson = res.data[0];
            $scope.routeTable = res.data[1];
            $scope.loading = false;
            loadGEO($scope.geoJson);
        })
    };

}]);
