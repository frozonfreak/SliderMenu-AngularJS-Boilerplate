var smApp = angular.module('smApp',['ui.bootstrap','ui.router', 'snap']);

smApp.config(function($stateProvider, $urlRouterProvider) {

  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home.html",
      controller: 'appController',
    })
    // For any unmatched url, redirect to /state1
     $urlRouterProvider.otherwise("/404");

});
//controller
smApp.controller('appController', function($scope){

	$scope.alerts = [];
	$scope.searchText;
	
	$scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };	
  	//Initializer
	init();
	function init(){
		
		
	};
	$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
	
});