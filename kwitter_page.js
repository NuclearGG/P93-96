
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

    room_name = localStorage.getItem('room_name');
    user_name = localStorage.getItem('username');

    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); 
      if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['msge'];
         likes = message_data['like'];
         name_with_tag = "<h4><b>"+name+"<img src='tick.png' class='user_tick'></b></h4>";
         message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
         like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+likes+" onclick='updatelikes(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+likes+"</span></button><hr>";

         row = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById('output').innerHTML += row;
      } });  }); }
getData();

function sendMessage(){
      msg = document.getElementById('msg').value;
      firebase.database().ref(room_name).push({
            name: user_name,
            msge: msg,
            like: 0
      });
      document.getElementById('msg').value = "";
    }

      function updatelikes(message_id){
            button_id = message_id;
            like = document.getElementById(button_id).value;
            updatedlikes = Number(like) + 1;
            firebase.database().ref(room_name).child(message_id).update({
                  like: updatedlikes
            });
      }


      function logout(){
      localStorage.removeItem('username');
      localStorage.removeItem('room_name');
      window.location = "index.html";
      }

