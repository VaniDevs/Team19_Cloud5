var token;
var user;

function login(){

var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      //token = result.credential.accessToken;
      //user = result.userInfo;
      //var user = firebase.auth().currentUser;
      //sessionStorage.setItem('user', user);



      window.location.href = "admin.html";
 
    }).catch(function(error) {

      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;

    });
}

var database = firebase.database();


function openServiceList() {
    window.open("../../Views/listResources.html", "_self");
}
