//google Login
function onLoadFunction(){
  gapi.client.setApiKey('AIzaSyBZx3c9F8hF210obv2lKH9lgZe4ug-p5p4');
  gapi.client.load('plus', 'v1', function(){});
}

window.fbAsyncInit = function() {
    FB.init({
      appId      : '829321390543116',
      xfbml      : true,  // parse XFBML
      version    : 'v2.8',
      status : 'true' // check login status
    });
    FB.getLoginStatus(function(response){
      if(response.status === 'connected'){
        console.log('connected');
        console.log(response.authResponse.accessToken);
      }else if(response.status === 'not_authorized'){
        console.log('not_authorized');
      }else {
        console.log('not logged');
      }
    })

   // FB.getAuthResponse(function(response){
      
    //})
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

