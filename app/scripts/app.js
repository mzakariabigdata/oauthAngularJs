'use strict';

/**
 * @ngdoc overview
 * @name oauthAngularJsApp
 * @description
 * # oauthAngularJsApp
 *
 * Main module of the application.
 */
angular
  .module('oauthAngularJsApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/home');

	var homeState = {
  	name : 'home',
  	url: '/home',
  	templateUrl: 'views/main.html',
  	controller : 'MainCtrl'
  }
  var loginState = {
  	name : 'login',
  	url: '/login',
  	templateUrl: 'views/login.html',
  	controller : 'MainCtrl as main'
  }
  var albumState = {
  	name : 'album',
  	url: '/album',
  	templateUrl: 'views/album.html',
  	controller : 'AlbumCtrl as album'
  }

  var photosState = {
  	name : 'photos',
  	url: '/photos',
  	templateUrl: 'views/photos.html',
  	controller : 'PhotosCtrl as photos'
  }

  $stateProvider.state(homeState);
  $stateProvider.state(loginState);
  $stateProvider.state(albumState);
  $stateProvider.state(photosState);

  
}]);