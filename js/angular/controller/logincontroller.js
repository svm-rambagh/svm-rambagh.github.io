var demoApp = angular.module("demoApp", []);

        demoApp.controller('ModuleController', function($scope, $http) {
            
            $scope.password="";
            $scope.id="";
            
            var data = {
            		    password:$scope.password,
            		    id:$scope.id
            		    };
            
            $scope.callGeeting = function (){
            	console.log("in function"+data);
            	$http.post('/greeting', data).
                then(function(response) {
                   console.log("success");
                }, function(response) {
                	console.log("failed");
                });
            } 
            
                     
        });