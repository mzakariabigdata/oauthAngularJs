'use strict';

/**
 * @ngdoc service
 * @name oauthAngularJsApp.returnAllPicture
 * @description
 * # returnAllPicture
 * Service in the oauthAngularJsApp.
 */
angular.module('oauthAngularJsApp')
  .service('returnAllPicture', function () {

  var urlPhotosAlbum;
  var pass = 0;

  this.setInfoAlbum = function(name){
        urlPhotosAlbum = name;


   }

    this.getInfoAlbum = function(){
      return urlPhotosAlbum ;
    }

  });
