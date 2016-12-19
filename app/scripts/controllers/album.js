/**
 * @ngdoc function
 * @name oauthAngularJsApp.controller:AlbumCtrl
 * @description
 * # AlbumCtrl
 * Controller of the oauthAngularJsApp
 */
angular.module('oauthAngularJsApp')
  .controller('AlbumCtrl', ['$stateParams','infoUser','$state','infoPhotos','returnAllPicture', function ($stateParams, infoUser, $state, infoPhotos, returnAllPicture) {
   // console.log("this from album " + infoUser.getInfoUser());
    this.picture = returnAllPicture.getInfoAlbum();
    //console.log("this url = "+infoUser.getInfoAlbum());
    this.listUrlPhoto = [];
    var url = [];
    var vm;
    function getUrlAlbum(){
    	var listt = [];
    	var listUrl = [];
		var pas;
								for (var i = 0; i < infoUser.getInfoUser().length; i++) {
									//if (i==response.data.length-1) {$state.go('photos');}
									
										FB.api(
											// "/me/photos", function (response) {
									    ""+infoUser.getInfoUser()[i].id+"/picture", function (response) {
										      if (response && !response.error) {
										      			//vm = 'hello';
														//console.log(infoUser.getInfoUser()[i].id);
														//$("#my_image").attr("src", response.data.url);
														listUrl.push(response.data.url);
														//$("#walo").attr("src", response.data.url);
														$("#").append('<a href="#"><img  src='+response.data.url +'></a>');
														//this.walo = response.data.url;
														//$nytElem.append('<h1>Init :  '+response.data.url+'</h1>');
														//console.log('list tp =='+listUrlPhoto.length);
														//infoPhotos.setlistUrlPhoto(vm);
													}
									    });

						    	}

						    for (var i = 0; i < listt.length; i++) {
						    //console.log(listt[i] +'URL' + listUrl[i]);

						    }
						    listUrl.forEach(function(element) {
 							//	 console.log(element);
							});
						   // console.log(listUrl);

	}

	getUrlAlbum();
	this.albums = infoUser.getInfoUser();
	this.urlPhoto = url;

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
										      			vm = 'hello';
														//console.log(response.data.url);
														//console.log('list tp =='+listUrlPhoto.length);
														infoPhotos.setlistUrlPhoto(vm);
													}
									    });
						    	}
						    	
						    	//returnAllPicture.setInfoAlbum(listUrlPhoto);
							//console.log(response);
							
		      		}
		    	});
		};

		this.test = function(){
			//console.log("salaomn");
		}

  }]);
