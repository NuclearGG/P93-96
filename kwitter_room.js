
const firebaseConfig = {
      apiKey: "AIzaSyC2j49bioj5tuEaLxrZf-8EUySJN4jCNQA",
      authDomain: "nucleargram-125f9.firebaseapp.com",
      databaseURL: "https://nucleargram-125f9-default-rtdb.firebaseio.com",
      projectId: "nucleargram-125f9",
      storageBucket: "nucleargram-125f9.appspot.com",
      messagingSenderId: "831428350479",
      appId: "1:831428350479:web:a818d4a64605cf2354497a"
    };
    
//    Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    un = localStorage.getItem('username');
    document.getElementById('greetings').innerHTML = "Welcome " + un + "!";
    function logout(){
      localStorage.removeItem('username');
      localStorage.removeItem('room_name');
      window.location = "index.html";
    }

    function addRoom(){
     rn = document.getElementById('room_name').value;
      rn_lc = rn.toLowerCase();
      room_name = rn_lc.replaceAll(" ", "_")
      firebase.database().ref('/').child(room_name).update({
        purpose: "why reading this?"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
      
    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='RedirectToroom(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById('output').innerHTML += row;
      });});}
getData();

function RedirectToroom(naem){
  console.log(naem);
  localStorage.setItem("room_name", naem);
  window.location = "kwitter_page.html";
}
