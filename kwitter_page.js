//Firebase links
var firebaseConfig = {
    apiKey: "AIzaSyCmO4o2NVoseagvgpvTmTG7YuFuXzgdDSc",
    authDomain: "lets-chat-43146.firebaseapp.com",
    databaseURL: "https://lets-chat-43146-default-rtdb.firebaseio.com",
    projectId: "lets-chat-43146",
    storageBucket: "lets-chat-43146.appspot.com",
    messagingSenderId: "424536627566",
    appId: "1:424536627566:web:8ae8eca999f7644b97097f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function logout () {
 localStorage.removeItem("room_name");
 localStorage.removeItem("user_name");
 window.location = "index.html";
}

function send () {
 msg = document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name : user_name,
       message : msg,
       like : 0
 });
 document.getElementById("msg").value = "";
}