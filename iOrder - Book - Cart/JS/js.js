function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

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
// il db per intero per poterlo poi leggerlo o modificarlo
/*var reference_DB = firebase.database().ref('/');

// Questo variabile permette (con questo tipo di chiamata 'Menu_Categorie/')
// di fare rifermiento solo a una parte del db a propria scelta
var reference_menu = firebase.database().ref('Menu_Categorie/');
*/
/*
scrittura_su_db()

function download_db(ref1){
    db = ref1
    // con for in si prendono gli indici dei primi figli del json di db e si inseriscono in
    for(var db_figli in db ){
        if(db_figli == 'Credenziali'){
            document.getElementById("login").innerHTML += db[db_figli]['login']
            document.getElementById("password").innerHTML += db[db_figli]['pwd']
        }

    }
    // db_figli = ('Credenziali','Menu_Categorie','Ordini','Prenotazioni','Tavoli')
}

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
}*/

let referenceDb = firebase.database().ref('Prenotazioni/');

function invia_prenotazione_db(){

    Name = document.getElementById("Name").value;
    phone = document.getElementById("Pnum").value;
    ppl = document.getElementById("People").value;
    day = document.getElementById("Data").value;
    hour = document.getElementById("Ora").value;
    notes = document.getElementById("Notes").value;

    const esempio = {
        Nome: Name,
        Telefono: phone,
        N_Persone : ppl,
        Data : day,
        Ora : hour,
        Ulteriori_Note : notes
    }

    let randId = (Math.floor(Math.random() * 200) + 1);

    referenceDb.on('value',(snapshot) => {
        var db1 = snapshot.val()

        for (var db_figli in db1) {
            while(db_figli === randId.toString()) {
                randId = (Math.floor(Math.random() * 200) + 1);
            }
        }
    })

    firebase.database().ref('Prenotazioni/' + randId.toString() + '/').update(esempio);
}

function checkAllFields()
{
    let fieldName = document.getElementById("Name").value;
    let fieldPnum = document.getElementById("Pnum").value;
    let fieldNumP = document.getElementById("People").value;
    let fieldDate = document.getElementById("Data").value;
    let fieldHour = document.getElementById("Ora").value;

    if(fieldName && fieldPnum && fieldNumP && fieldDate && fieldHour)
    {
        if(fieldPnum.length === 10)
            return true;
        else
            alert("Phone number is not a valid number.")
    }
    else
    {
        alert("Name, phone number, n°people, date and hour are required.")
    }
}

function confirm()
{
    let btn = document.getElementById("ConfirmButton");
    let url = "PrenotazioneConfermata.html"

    if(checkAllFields())
    {
        invia_prenotazione_db();
        window.location = url;
    }
}

function checkInp()
{
    let input=document.getElementById("Pnum").value;

    if(isNaN(input) === true)
    {
        alert("Must input numbers.");
        let inputN = input.slice(0, input.length-1);
        document.getElementById("Pnum").value = inputN;
    }
}


