'use strict';

/**
 * @ngdoc function
 * @name oauthAngularJsApp.controller:PhotosCtrl
 * @description
 * # PhotosCtrl
 * Controller of the oauthAngularJsApp
 */
angular.module('oauthAngularJsApp')
  .controller('PhotosCtrl', ['$state', 'infoPhotos','$http', 'returnAllPicture',function ($state, infoPhotos, $http,returnAllPicture) {

	this.allPhotos = infoPhotos.getInfoPhotos()[0];

	var allPhotoss = []
	if (infoPhotos.getInfoPhotos()[0] !== undefined ) {
		allPhotoss = infoPhotos.getInfoPhotos()[0];
	}

    this.download = function() {
      $http.get('https://unsplash.it/200/300', {
          responseType: "arraybuffer"
        })
        .success(function(data) {
          var anchor = angular.element('<a/>');
          var blob = new Blob([data]);
          anchor.attr({
            href: window.URL.createObjectURL(blob),
            target: '_blank',
            download: 'fileName.png'
          })[0].click();
        })
    };
	
	$(document).ready(function () {
	var external = $("#external");
	external.click();
	external.click(function(){
	    $("#gallery > img").unbind("click").click(function () {
	        $(this).toggleClass("selected");
	    });
	    $("#reset").click(function () {
	        $("input").val("");
	        $("img.selected").removeClass("selected");
	    });
	    
	});
	});

	$("#create").click(function () {
	        var txt = "Have all desired images been selected?";
	        var conf = confirm(txt);
	        if (!conf) return false;

	        if ($("img.selected").length == 0) {
	            alert("Select at least 1 image");
	            return false;
	        }
	        //$("#galleryHeader").append($title, $title2).show();
	        //$("#form").hide();
	        //$("img").off("click");
	        //$("img:not(.selected)").hide();
	        //$("img.selected").removeClass("selected");
	        console.log($("img.selected") );
	    });
	this.getUrl = function() {  
		if (allPhotoss.length == 0) $state.go('login');
        for (var key in allPhotoss) {
            	//console.log(allAlbum[key].id);
            	var urlAlbum = fbUserAlbumURL(allPhotoss[key].id);
            	urlAlbum(function(model, info){
            		//console.log( info +' : '+ model);
            		$("#"+info).prop("src", model).width(196).height(196);
            		
            	});
			}
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
