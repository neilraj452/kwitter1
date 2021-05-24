
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyC6zY6f8oC3XYud7OVObrv6jpiMogB6wFQ",
      authDomain: "kwitter-85469.firebaseapp.com",
      databaseURL: "https://kwitter-85469-default-rtdb.firebaseio.com",
      projectId: "kwitter-85469",
      storageBucket: "kwitter-85469.appspot.com",
      messagingSenderId: "605043877229",
      appId: "1:605043877229:web:30c0c0432d992570f5a664",
      measurementId: "G-YKSC2ZV6G1"
    };
    // Initialize Firebase
