

var token;
var user;

function myfunction(){
    console.log("asdsadasdasdsadsdasdsadsa");

var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
   token = result.credential.accessToken;
   user = result.user;
  console.log(user);
  console.log(token);
}).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  var email = error.email;
  var credential = error.credential;
});
}

