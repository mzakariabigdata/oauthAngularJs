'use strict';

/**
 * @ngdoc function
 * @name oauthAngularJsApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the oauthAngularJsApp
 */
angular.module('oauthAngularJsApp')
  .controller('IndexCtrl', ['$state', function ($state) {

      this.onFBLogout = function() {
       FB.api('/me/permissions', 'DELETE', function(res){
		    if(res === true){
		        console.log('app deauthorized');
		        
		    }else if(res.error){
		        console.error(res.error.type + ': ' + res.error.message);
		    }else{
		        console.log(res);
		        $('#logout').show();
		      	$('#login').hide();
		      	$state.go('login');
		    }
		});
   };
      

  }]);
