
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

    var reference_menu = firebase.database().ref('Menu_Categorie/');
    var refrence_cred = firebase.database().ref('Credenziali/')


     
    /* GLOBAL VAR*/
   
    

    var id_open_menulist = null;
    let db_menu;

    let carrello = {
        
    };
    if(sessionStorage.hasOwnProperty("carrello"))
    {
        carrello = JSON.parse(sessionStorage.getItem("carrello"))
    }
    
    /* GLOBAL FUNCTION  */

    window.onload = function(){

      
        reference_menu.on('value', (snapshot)=> {
            var db = snapshot.val();
            load_menu(db)
           
        })
        
    };

    function load_menu(db){
        db_menu = db
        
        var category_list = document.getElementById("category_list");
        var r_colon = document.getElementById("r_colon");


        category_list.innerHTML += "<li> <a class = "+ '"c-menu-link "'+ 'href="#id0" onclick="scroll_left_colon('+"'Home'"+')">Home</a> </li>';
        
        for(var cat_menu in db_menu){
            
            category_list.innerHTML += "<li> <a class = "+ '"c-menu-link "'+ 'href="#'+cat_menu+'" onclick="scroll_left_colon('+"'"+cat_menu+"'"+')">'+cat_menu+'</a> </li>';
        }

        for(var cat_menu in db_menu){

            r_colon.innerHTML += '<section id="'+cat_menu+'" > <div onclick="open_menulist('+"'"+cat_menu+"'"+')"  class="title2 " > <a  href="#'+cat_menu+'">'+cat_menu+'</a> <img class ="category_arrow" src="Images/destra40.png" ></img> </div> <div id="menulist'+cat_menu+'" class="menu-list" >'

            for(var articoli_menu in db_menu[cat_menu]){
                
                document.getElementById('menulist'+cat_menu).innerHTML+= '<button onclick="open_mod('+"'"+cat_menu+"','"+articoli_menu+"'"+')" class="menu-item "><div class="menu_img"><img src="'+db_menu[cat_menu][articoli_menu]['img']+'"></div> <div class="disposing-v"> <p class="menu-description">'+articoli_menu+'</p> <p class="menu-description">'+db_menu[cat_menu][articoli_menu]['ingredienti']+'</p> <p>'+db_menu[cat_menu][articoli_menu]['prezzo']+'€</p> </div> <img class="menu_icon_right" src="Images/destra40.png"> </button> ' 
            }
            r_colon.innerHTML+= "</div></section>"
        }

        

    }


    function return_length(obj){
        var i;
        for(i =1; obj[i]!= undefined;i++){
            
        }
        return i;
    }

    let links = document.querySelectorAll('a[href*="#"]');
    links.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(function() {
                window.history.pushState(document.html, document.title, document.URL.split('#')[0]);
            }, 1);
        });
    });

    window.addEventListener('load', () => {
        window.history.pushState(document.html, document.title, document.URL.split('#')[0]);
    });

    window.onclick = function(event) {
        var id_modal = document.getElementById("modal");
        if (event.target == id_modal) {
            close_mod()
        }
    }


    /* SPECIFIC FUNCTION  */

    function scroll_left_colon(name){

        selector = document.getElementById("category_list");
        sel1 = selector.getElementsByTagName("li");
        
        

        for(i=0; i < return_length(sel1);i++){
            a = sel1[i].getElementsByTagName("a")[0];

            if(name == a.textContent ){
                    a.classList.add("c-menu-link-active");
                }
            else{
                if (a.classList.contains("c-menu-link-active")) {
                    a.classList.remove("c-menu-link-active");
                }
            }
        }        
    }

    function open_menulist(elem){
        selector = document.getElementById(elem);
        sel1 = selector.getElementsByTagName("div");
        a = sel1[0].getElementsByTagName("a")[0]
        sel2 =sel1[0].getElementsByTagName("img")

        if(sel1[1].classList.contains("menu-list_2")){
            close_menulist(id_open_menulist);
        }
        else{
            sel1[1].classList.remove("menu-list");
            sel1[1].classList.add("menu-list_2");
            
            sel2[0].classList.remove("category_arrow");
            sel2[0].classList.add("category_arrow_2");

            if(id_open_menulist != null){
                if(id_open_menulist != elem){
                    close_menulist(id_open_menulist);
                    a.click() 
                } 
                
                 
            }
        }
        id_open_menulist = elem;
        
    }

    function close_menulist(elem){
        selector = document.getElementById(elem);
        sel1 = selector.getElementsByTagName("div");
        sel1[1].classList.remove("menu-list_2");
        sel1[1].classList.add("menu-list");
        sel2 =sel1[0].getElementsByTagName("img")
        
        sel2[0].classList.remove("category_arrow_2");
        sel2[0].classList.add("category_arrow");
        
    }

    /*. MODAL .*/


    function close_mod(){
        var id_modal = document.getElementById("modal");
        var id_amount = document.getElementById("amount_item")
        id_modal.classList.remove("modal_block");
        id_amount.innerHTML = "1";
    }

    function open_mod(elem1,elem2){
        var id_modal = document.getElementById("modal");
        var id_carrello_button = document.getElementById("add_carrello_button");
        
        set_campi_modal(elem1,elem2)
        id_carrello_button.setAttribute("onclick","add_carrello('"+elem1+"','"+elem2+"')");
        id_modal.classList.add("modal_block");
    }

    function change_amount_item(elem){
        var id_cost = document.getElementById("cost_item");
        var id_amount = document.getElementById("amount_item");
        var amount = parseInt(id_amount.innerText)
        var cost =parseFloat(id_cost.innerHTML)
       

        if(elem =='-'){
            if(amount != 1){
                id_cost.innerHTML = (cost - (cost/amount)).toString();
                amount--
                id_amount.innerHTML= (amount).toString();
                
           }
        }
        else{
            id_cost.innerHTML = (cost + (cost/amount)).toString() ;
            amount++
            id_amount.innerHTML= (amount).toString();
           
        }
    }

    function set_campi_modal(elem1,elem2){
        var id_title = document.getElementById("title_item");
        var id_cost = document.getElementById("cost_item");
        
        categoria_selezionata = elem1
        item_seleziato = elem2

        id_title.innerHTML = elem2;
        id_cost.innerHTML = (parseFloat(db_menu[elem1][elem2]['prezzo'])).toString();
        

    }
    

    function add_carrello(cat_menu,item_menu){

        var id_cost = document.getElementById("cost_item");
        var id_amount = document.getElementById("amount_item");
        var cost = parseFloat(id_cost.innerHTML)
        var amount = parseFloat(id_amount.innerHTML)

        if(carrello.hasOwnProperty(cat_menu)){
            
            if(carrello[cat_menu].hasOwnProperty(item_menu)){
                
                carrello[cat_menu][item_menu]["prezzo"] += cost
                carrello[cat_menu][item_menu]["amount"] += amount
            }
            else{
                let item_object  = {
                    "prezzo": cost, 
                    "amount":amount
                }
                carrello[cat_menu][item_menu] = item_object
            }

        }
        else{
          
            let item_object  = {
                "prezzo": cost, 
                "amount":amount
            }
            carrello[cat_menu] = {} 
            carrello[cat_menu][item_menu] = item_object
            
        }
        close_mod()
        //console.log(carrello)
        // console.log(JSON.stringify(carrello))
        sessionStorage.setItem("carrello",JSON.stringify(carrello));

        //TRASFERIMENTO CONTENUTO DEL CARRELLO A LOCALSTORAGE PER PASSARLO ALLA PAGINA CARRELLO
        //PROCEDE SOLO QUANDO VIENE PREMUTO IL TASTO 'AGGIUNGI' DI UN PRODOTTO
        localStorage.setItem("carrelloStorato", JSON.stringify(carrello))
        //STAMPA PER CAPIRE CHE CAZZO STIAMO TRASFERENDO
        console.log("carrelloStorato")
        console.log(localStorage.getItem("carrelloStorato"));
    }

    function send_ordine(){
        var c1 = sessionStorage.getItem("carrello")
        var c2 = JSON.parse(c1)
        console.log("carrello")
        console.log(carrello)
        console.log("session")
        console.log(c2)

        if(confirm("Cliccando ok procederai al carrello."))
        {
            window.location.href = "Carrello.html";
        }
    }

    function todavide(){

        var auth = firebase.auth();
        var userCredential =  auth.createUserWithEmailAndPassword(email,password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
       })
    }

    // FUNZIONI PER BARRA LATERALE
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }