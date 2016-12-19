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

  	this.dataUser = [] ;
  	this.Userdata = {
  		album : []
  	}
  	this.cover_photo = function(){
  		console.log('salam moi');
  	}

  	this.checkboxModel = function(){
  		console.log(checkboxModel);
  		if (checkboxModel.value1== 'Yes') {console.log("true")};
  	}

  	function returnUrlPicture(info){
  		var pas;
		for (pas = 0; pas < info.length; pas++) {
					FB.api(
					    "/"+info[pas].id+"/picture",
					    function (response) {
					      if (response && !response.error) {
					        //console.log(response.data.url);
					        returnAllPicture.setInfoAlbum(response.data.url);
					        //console.log(response.data.url);
					      }
					    }
				);
		}
  	};
	this.onFBLogin =function(){
		FB.login(function (response) {
			if(response.authResponse){
				FB.api('/me', 'GET', {fields : 'email, first_name, name,  id, picture, albums, gender, last_name'}, function (response){
					this.name = response.name;
					this.user =response.name;
					infoUser.setInfoUser(response.albums.data);
					returnUrlPicture(response.albums.data);
					//infoUser.logthis();
					//console.log("this for me"+response);
					//console.log("this for me main === "+infoUser.getInfoUser() );
					$state.go('album');
				});
			}else {
				//error
			}
					}, {
			scope: 'email, user_likes, publish_actions, , user_photos',
			return_scopes: true
		});
		
		this.cover_photo();
	};

	
  }]);
