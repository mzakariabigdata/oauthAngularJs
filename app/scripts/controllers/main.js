'use strict';

/**
 * @ngdoc function
 * @name oauthAngularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the oauthAngularJsApp
 */
angular.module('oauthAngularJsApp')
  .controller('MainCtrl', ['$stateParams','infoUser','$state','returnAllPicture', function ( $stateParams, infoUser, $state, returnAllPicture) {

  	var checkBox =0;
  	this.stateChanged = function (qId) {
	   if(this.answers[qId]){ //If it is checked
	       checkBox = 1;
	       //$state.go('album');	
	   }else {
	   	checkBox = 0;
	   }
	};
	this.onFBLogout = function(){
  		console.log("LogOut");
  	};
	this.onFBLogin = function() { 
		if (checkBox == 1) {	
		$('#logout').show();
		$('#login').hide();
	    var getUser = fbUserAlbum(function(model){
	       var allAlbum = model.albums.data.sort();
	        infoUser.setInfoUser(allAlbum);
	        //console.log(allAlbum);
	        for (var key in allAlbum) {
	            	//console.log(allAlbum[key].id);
	            	var urlAlbum = fbUserAlbumURL(allAlbum[key].id);
	            	urlAlbum(function(model, info){
	            		//console.log( info +' : '+ model);
	            		$("#"+info).prop("src", model).width(196).height(196);
	            		
	            	});
				}
	        $state.go('album');
	    }); 
	}else{
		alert("we are not going to do anything")
	}

	};


  	function fbUserAlbum(callback){  
  		FB.login(function (response) {
  			if(response.authResponse){
		        FB.api('/me','GET', {fields : 'email, first_name, name,  id, picture, albums, gender, last_name'}, function(response){
		                callback(response);
		            });
		    }
		}, {
			scope: 'email, user_likes, publish_actions, user_photos',
			return_scopes: true
		});
	};

	function fbUserAlbumURL(info){
		 return function (callback) {
					FB.api(
					    "/"+info+"/picture",
					    function (response) {
					      if (response && !response.error) {
					        callback(response.data.url, info);
					      }
					    }
					);
				};
  	};

  	
  }]);