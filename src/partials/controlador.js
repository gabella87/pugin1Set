var app = angular.module('myApp',[]);
app.controller('control',function($scope, $http){
    http.post('pehachepe.php').success(data){
        $scope.posts = data;
    });
});