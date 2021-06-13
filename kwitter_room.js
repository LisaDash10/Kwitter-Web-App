var firebaseConfig = {
      apiKey: "AIzaSyCs_vEJ2KjRWN19CkLkj_vfkxOjFeYyUXI",
      authDomain: "kwitter-3cbf0.firebaseapp.com",
      databaseURL: "https://kwitter-3cbf0-default-rtdb.firebaseio.com",
      projectId: "kwitter-3cbf0",
      storageBucket: "kwitter-3cbf0.appspot.com",
      messagingSenderId: "101859448552",
      appId: "1:101859448552:web:b77c04b4cb6da002345b5d",
      measurementId: "G-L4SVWN96CQ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
console.log(user_name);
document.getElementById("user_name").innerHTML = " Welcome "+ user_name;

function add_room() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
   console.log(name);
   localStorage.setItem("room name = ", name);
  window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


