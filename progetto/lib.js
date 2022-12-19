// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCOtLofh769IUSJlU4q2a_JxttA1G1lpjg",
    authDomain: "iorder-d5e5d.firebaseapp.com",
    databaseURL: "https://iorder-d5e5d-default-rtdb.firebaseio.com",
    projectId: "iorder-d5e5d",
    storageBucket: "iorder-d5e5d.appspot.com",
    messagingSenderId: "949095498114",
    appId: "1:949095498114:web:d59f6f38f56eb553574f9b",
    measurementId: "G-WE96E9BSXP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Initialize variables
  var database = firebase.database()
  var reference_DB = firebase.database().ref('/');
  var reference_menu = firebase.database().ref('Credenziali/');


  window.onload = function(){ 
    
    // tutto ciò è racchiuso in window.onload in modo da leggere i dati 
    // al caricamento della pagina prima che la vede l'utente e quindi 
    //poter inserire i dati del db nell'HTML

    reference_DB.on('value',(snapshot) => {
        var db1 = snapshot.val()
        download_db(db1); // OPERAZIONE DI LETTURA
        
      });

    
  }

  scrittura_su_db()


  function scrittura_su_db(){
    // per scrivere nel db bisogna per forza usare una struct 
    // come lo è db1 da inserire poi in update
    const esempio={
      Nome: 'panini',
      NumeroTavolo: 10,
      Orario :  '10:30'
    }
} 

const _v = { 
    hasError : false,
    isValidPassword: false,
    emailPattern : /^[^\s@]+@[^\s@]+\.[^\s@]+$/
};

function formValidation(form, notifica) {    
    _v.form = document.querySelector(`${form}`);
    _v.notificationItem = document.querySelector(`${notifica}`);    
    _v.pwdStrengthColor = document.querySelectorAll('#password > span');
    _v.formItems = Array.from(_v.form.elements);   
    passwordStrength();
    submitForm();
}

function submitForm() {     
    _v.form.addEventListener('submit', (e) => {
        e.stopPropagation();
        e.preventDefault();
        checkValidation();        
    }, true);
}

function checkValidation() { 
    try {
        //Controllo il completamento dei campi obbligatori
        requiredFields();

        //Controllo correttezza email
        isValidEmail();

        //Controllo validità password e corrispondenza con conferma
        checkPassword();

        //Controlli superati. Invio form (non implementato) e notifica
        _v.notificationItem.className = 'notification-success';
        _v.notificationItem.textContent = 'La registrazione è avvenuta correttamente.';
        resetForm();
    } catch(e) {
        _v.notificationItem.className = 'notification-error';
        _v.notificationItem.textContent = e.message;
        //console.dir(e);
    }
    
}

function requiredFields() {
    let error;
    _v.hasError = false;
    _v.formItems.forEach(item => {
        error = false;
        if (item.type !== "checkbox" && item.value === "" && item.required) {
            error = true;
        }
        if (item.type === "checkbox" && item.required && !item.checked) {
            error = true
        }
        if (error && item.type !== "submit") {
            _v.hasError = true;
            item.classList.add("error");            
        }
    });
    if(_v.hasError) {
        throw new Error('Compilare i campi obbligatori.');
    }
}

function isValidEmail() {
    if (!_v.emailPattern.test(_v.form.email.value)) {
        throw new Error('Email indicata non valida');
    }
}

/*
 * password valida (attivazione rosso): almeno 8 caratteri
 * password mediamente sicura (attivazione arancione): almeno 8 caratteri, con almeno un carattere speciale
 * password molto sicura (attivazione verde): almeno 10 caratteri, con due caratteri speciali e almeno una lettera in maiuscolo
*/
function passwordStrength() {    
    _v.form.password.addEventListener('keyup', (e) => {
        let isValid = {
            low: false,
            high: false
        },
        pwd = e.target.value;
        resetStrength();
        if(pwd.length >= 8) {
            _v.pwdStrengthColor[0].classList.add('active');
            if (regexCount(/[&?!%]/g, pwd) > 0) {
                _v.pwdStrengthColor[1].classList.add('active');
            }  
            isValid.low = true;
        } 
        if (pwd.length >= 10 && regexCount(/[&?!%]/g, pwd) > 1 && regexCount(/[A-Z]/g, pwd) > 0) {
            _v.pwdStrengthColor.forEach((item) => {
                item.classList.add('active');
            });
            isValid.high = true;            
        }
        _v.isValidPassword = (isValid.low || isValid.high) ? true : false;
    });
}

function resetStrength() {
    _v.pwdStrengthColor.forEach((item) => {
        item.classList.remove('active');
    });
}

function regexCount(pattern, stringa) {
    return (stringa.match(pattern) || []).length;
}

function checkPassword() {
    const password = _v.form.password.value,
        re_password = _v.form.re_password.value;

    if(!_v.isValidPassword) {
        throw new Error('Password non valida');
    }
    if (password !== re_password) {
        throw new Error('Password e conferma password non coincidono');
    }
}

function resetForm() {    
    resetStrength();
    _v.form.reset();
    _v.formItems.forEach(item => {
        item.classList.remove("error");
    });   
}
  