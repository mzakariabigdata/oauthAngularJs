
/**
 * @ngdoc service
 * @name oauthAngularJsApp.infoUser
 * @description
 * # infoUser
 * Service in the oauthAngularJsApp.
 */
angular.module('oauthAngularJsApp')
  .service('infoUser', function () {
  	var nameUser = {walo : "", url:[]} ;
    var urlPhotosAlbum = [];

    this.setInfoUser = function(name){
    	nameUser.walo= name;
    }

    this.getInfoUser = function(){
    	return nameUser.walo;
    }


    this.setInfoAlbum = function(name){
        urlPhotosAlbum[0] = name;
      //console.log(urlPhotosAlbum[0]);
    }

    this.getInfoAlbum = function(){
      //console.log('in In Album ^' +urlPhotosAlbum[0] + " koko        "+urlPhotosAlbum[1]);
      console.log("saaaaaaaaaaa  :: "+urlPhotosAlbum[0]);
      return urlPhotosAlbum[0];

    }

    this.logthis = function(){
    //console.log('this what i get  '+nameUser);
    }

  });
