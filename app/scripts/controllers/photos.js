'use strict';

/**
 * @ngdoc function
 * @name oauthAngularJsApp.controller:PhotosCtrl
 * @description
 * # PhotosCtrl
 * Controller of the oauthAngularJsApp
 */
angular.module('oauthAngularJsApp')
  .controller('PhotosCtrl', ['$state', 'infoPhotos', 'returnAllPicture',function ($state, infoPhotos, returnAllPicture) {
    
   //this.allPhotos = infoPhotos.getInfoPhotos()[0];
   //this.allUrlPhotos = returnAllPicture.getInfoAlbum();
   	//console.log('salam = ' +infoPhotos.getlistUrlPhoto());
   	//this.walo1 = infoPhotos.getlistUrlPhoto();
	//console.log(infoPhotos.getlistUrlPhoto()[2]);
    //console.log(infoPhotos.getInfoPhotos()[1]);
    //console.log('fffffffffffffffffffffffffffffffffffffffffffff'+infoPhotos.getlistUrlPhoto());
    //var listUrlPhoto = [];
	//console.log('Data photos '+ infoPhotos.getInfoPhotos());
	
	//getUrlPhotos();
	//this.UrlPhotos = listUrlPhoto;

		var $nytElem = $('#nytimes-articles');
		this.allPhotos = infoPhotos.getInfoPhotos()[0];
		this.allUrlPhotos = returnAllPicture.getInfoAlbum();
	this.getUrl = function(){
		var pas;
								for (var i = 0; i < infoPhotos.getInfoPhotos()[0].length; i++) {
									//if (i==response.data.length-1) {$state.go('photos');}
									//console.log(response.data.id);
							    		FB.api(
											// "/me/photos", function (response) {
									    ""+this.allPhotos[i].id+"/picture", function (response) {
										      if (response && !response.error) {
										      			//vm = 'hello';
														//console.log(response.data.url);
														//this.walo = response.data.url;
														$nytElem.append('<p>Photo '+[i]+':  '+response.data.url+'</p>');
														//console.log('list tp =='+listUrlPhoto.length);
														//infoPhotos.setlistUrlPhoto(vm);
													}
									    });
						    	}
	}
/*
		var $nytElem = $('#nytimes-articles');
		
		console.log('Get Url');
		//this.walo = 'Get Url';
		/*
		var nytimesUrl = ""+this.allPhotos[0].id+"/picture"

                    $.getJSON(nytimesUrl, function(response){ 
                       
                            articles = response.data.url;
                            $nytElem.append('<h1>Init :  '+articles+'</h1>');
                        
                    })
*/

  }]);
