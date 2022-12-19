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


//Initialize variables
var auth = firebase.auth()
var database = firebase.database()

//Set up register function
function register() {
    //get all input fields that we have in our file
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    //username = document.getElementById('username').value


    /* GLOBAL VAR*/

    let userCredential = auth.createUserWithEmailAndPassword(email, password)

        .then((userCredential) => {

            // Signed in

            let user = userCredential.user;

        })
}
/*
    //validate input fields
    if (validate_email(email) === false || validate_password(password) === false) {
        alert('The email or the password are wrong')
        return
        //don't continue running the code
    }
    if (validate_field(username) === false) {
        alert('The username is wrong')
        return
    }
*/
/*
    //Move on with Auth
    createUserWithEmailAndPassword(auth, email, password)
        .then(function () {
            //Declare user variable
            let user = auth.currentUser

            //Add the user to Firebase
            let database_ref = database.ref()

            // Create user data
            let user_data = {
                email: email,
                username: username,
                last_login: Date.now()
            }

            database_ref.child('users/' + user.uid).set(user_data)

            alert('User created')

        })
        .catch(function (error) {
            //Firebase will use this to alert of its errors
            let error_code = error.coder
            let error_message = error.message

            alert(error_message)

        })
}

function validate_email(email){
    expression = /^[^@]+@\w+(\. \w+)+ \w$/
    if(expression.test(email) === true){
        //email is good
        return true
    }else{
        //email is not good
        return false
    }
}

function validate_password(password){
    //Firebase only accepts lenghts greater than 6
    if(password < 6){
        return false
    }else{
        return true
    }
}

//Function validate fields
function validate_field(username){
    if(username == null){
        return false
    }

    if (username.length <= 0){
        return false
    }else{
        return true
    }
}
*/
