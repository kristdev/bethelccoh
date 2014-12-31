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

})();