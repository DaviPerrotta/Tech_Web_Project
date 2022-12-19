/*
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  



  // Questa variabilie permette di creare una reference con 
  // il db per interno per poterlo poi leggerlo o modificarlo
  var reference_DB = firebase.database().ref('/');

  // Questo variabile permette (con questo tipo di chiamata 'Menu_Categorie/')
  // di fare rifermiento solo a una parte del db a propria scelta
  var reference_menu = firebase.database().ref('Menu_Categorie/');


  var db = 


  // la funzione on('value',(snapshot)) permette di leggere i dati da un db
  // con la funzione download_db mi passo la variabile db1 che contiene tutti i dati prelevati con la funzione on 

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
    // è possibbile fare una reference specifica al db
    firebase.database().ref('esempioscrittura/').update(esempio); 
    // oppure una reference creata in precedenza
    //reference_menu.update(esempio)


    // ATTENZIONE la funzione update elimina tutto quello che c'era 
    //in precenza sulla reference e la sostituisce con la struct passata 
  }


*/