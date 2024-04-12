//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyC2j49bioj5tuEaLxrZf-8EUySJN4jCNQA",
    authDomain: "nucleargram-125f9.firebaseapp.com",
    databaseURL: "https://nucleargram-125f9-default-rtdb.firebaseio.com",
    projectId: "nucleargram-125f9",
    storageBucket: "nucleargram-125f9.appspot.com",
    messagingSenderId: "831428350479",
    appId: "1:831428350479:web:a818d4a64605cf2354497a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getUser(){

    username = document.getElementById('user_name').value;

    localStorage.setItem("username", username);

    window.location = "kwitter_room.html";



}