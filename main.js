firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});

function login() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
    .then(function () {
      window.location = "principal.html";
    }).catch(function (error) {
      var errorMessage = error.message;
      window.alert("Erro: " + errorMessage);
    });
}

function logOut() {
  firebase.auth().signOut()
    .then(function () {
      window.location = "index.html";
    })
    .catch(function (error) {
      window.alert("Erro: " + error);
    })

}