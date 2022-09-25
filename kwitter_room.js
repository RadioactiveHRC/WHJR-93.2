
var firebaseConfig = {
      apiKey: "AIzaSyC4as_qXbVDzR2urfysJrwiT_iRAeJXWEE",
      authDomain: "kwitter-680e9.firebaseapp.com",
      databaseURL: "https://kwitter-680e9-default-rtdb.firebaseio.com",
      projectId: "kwitter-680e9",
      storageBucket: "kwitter-680e9.appspot.com",
      messagingSenderId: "654890211934",
      appId: "1:654890211934:web:3a0696c560753a0593f2cf"
};


firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome, " + user_name;
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey
                  console.log("room_name" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + "onclick='redirect(this.id)'>#" + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();
function redirect(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logOut() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_page.html";
} 