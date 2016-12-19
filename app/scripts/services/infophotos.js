'use strict';

/**
 * @ngdoc service
 * @name oauthAngularJsApp.infoPhotos
 * @description
 * # infoPhotos
 * Service in the oauthAngularJsApp.
 */
angular.module('oauthAngularJsApp')
  .service('infoPhotos', function () {
  	var allPhotos ;
    var size;
    var info = [];
    this.list = [];
    var vm ;
    
    this.setInfoPhotos = function(data, size){
    	info[0] = data;
      info[1] = size;//console.log(data);
    }
    

    this.getInfoPhotos = function(){
    	return info;
    }
    
    this.setlistUrlPhoto = function(listt){
      vm = listt;
      //console.log("oui" +vm );
    }
    

    this.getlistUrlPhoto = function(){
      console.log("ouiiiiiiiiiiiiiiiiiiiiiiiiii" +vm );
      //console.log(list);
      return vm;
    }
    /*
    this.setInfoPhotos = function(data){
      allPhotos = data;
    }*/
    this.logthis = function(){
    //console.log('this what i get  '+nameUser);
    }
  });
