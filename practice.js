var firebaseConfig = {
    apiKey: "AIzaSyD6B-dlvKXQIKcn961iBll_wR24TNGmO9I",
    authDomain: "practice-e03f9.firebaseapp.com",
    databaseURL: "https://practice-e03f9-default-rtdb.firebaseio.com",
    projectId: "practice-e03f9",
    storageBucket: "practice-e03f9.appspot.com",
    messagingSenderId: "404777039778",
    appId: "1:404777039778:web:009d72f7e76713205fa4fb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YoUR FIREBASE LINKS
function adduser(){
user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"
});
}