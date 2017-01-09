/**
 * @ngdoc function
 * @name oauthAngularJsApp.controller:AlbumCtrl
 * @description
 * # AlbumCtrl
 * Controller of the oauthAngularJsApp
 */
angular.module('oauthAngularJsApp')
  .controller('AlbumCtrl', ['$stateParams','infoUser','$state','infoPhotos','returnAllPicture', function ($stateParams, infoUser, $state, infoPhotos, returnAllPicture) {
   

	this.albums = infoUser.getInfoUser();
	
    this.photosInAlbum =function(idPhotos){
    	FB.api(
				// "/me/photos", function (response) {
		    ""+idPhotos+"/photos", function (response) {
			      if (response && !response.error) {
							infoPhotos.setInfoPhotos(response.data,response.data.length);
								var pas;
								for (var i = 0; i < response.data.length; i++) {
									if (i==response.data.length-1) {$state.go('photos');}
									//console.log(response.data.id);
							    		FB.api(
											// "/me/photos", function (response) {
									    ""+response.data[i].id+"/picture", function (response) {
										      if (response && !response.error) {
										      			vm = 'hello';infoPhotos.setlistUrlPhoto(vm);
													}
									    });
						    	}
		      		}
		    	});
		};

  }]);
