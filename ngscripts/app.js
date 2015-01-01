(function(){
	/**
	*  Module bethModule
	*
	* Ce module a pour objectif de décrire un certain nombre de fonctionnalités du site web par AngularJs.
	*/
	var app=angular.module('beth', []);

	app.directive("headertop", function(){
		return{
			restrict: 'E',
			templateUrl: 'includes/headertop.html'
		}
	});

	app.directive("foot", function(){
		return{
			restrict: 'E',
			templateUrl: 'includes/footertemplate.html'
		}
	});

	app.controller('homemenuController', function($scope){
		$scope.menupage="index";
	});

	app.controller('historymenuController', function($scope){
		$scope.menupage="history";
	});

	app.controller('pastoralstaffmenuController', function($scope){
		$scope.menupage="pastoral-staff";
	});

	app.controller('destinyhomemenuController', function($scope){
		$scope.menupage="destiny-home";
	});

	app.controller('calendarmenuController', function($scope){
		$scope.menupage="calendar";
	});

	app.controller('storemenuController', function($scope){
		$scope.menupage="store";
	});

})();