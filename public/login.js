// Import Firebase và khởi tạo ứng dụng Firebase
import firebase from 'firebase/app';
import 'firebase/auth';

btnPopup.addEventListener("click", function () {
  // Get the values of email and password fields by their IDs (remove the dots)
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Lưu trữ email và password vào Realtime Database
  const database = firebase.database();
  const userData = {
    email: email,
    password: password,
  };

  const newUserDataRef = database.ref("user_data").push();

  newUserDataRef.set(userData);

});
