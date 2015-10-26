var anythingStudio = angular.module('anythingStudio', []);

anythingStudio.controller('anythingStudioController', function($scope){

	$scope.formModel = {
		subject : "subject",
		msg: "Here goes your message"
	};


	$scope.encodeString = function(string){
		return window.encodeURIComponent(string);
	};

	$scope.images = [
		{src : 'studio_1.jpg', title : 'laptop'},
		{src : 'studio_2.jpg', title : 'autumn'},
		{src : 'studio_3.jpg', title : 'imac'},
		{src : 'studio_4.jpg', title : 'office'},
		{src : 'studio_5.jpg', title : 'forest'},
		{src : 'studio_6.jpg', title : 'railroad'},
		{src : 'studio_7.jpg', title : 'studio'},
		{src : 'studio_8.jpg', title : 'sunset'},
		{src : 'studio_9.jpg', title : 'stars'}
	];

	$scope.tabs = ["one", "two", "three", "four"];

	$scope.menu1clicked = function(){
		$scope.menu1 = !$scope.menu1;
		alert('asdf');
	};

});