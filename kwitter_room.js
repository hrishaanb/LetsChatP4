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
  document.getElementById("user_name").innerHTML = "Welcome, " + user_name + "!";



  function getData() {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  //Start code
  console.log("Room name - " + Room_names);
  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div>"
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
  getData();



//Code

room_name = document.getElementById("room_name").value;



function redirectToRoomName (name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function addRoom () {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function logout () {
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "index.html";
}