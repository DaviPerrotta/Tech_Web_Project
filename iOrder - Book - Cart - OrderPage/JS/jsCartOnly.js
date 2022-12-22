window.onload = function ()
{
    getOrdered();
}

//CHECK STAMPANDO IL CARRELLO IN CONSOLE
function getOrdered()
{
    //RECUPERO DATI DA LOCAL STORAGE
    let carrello = localStorage.getItem("carrelloStorato");
    let parole = carrello.split(/[",:{}]/);
    let ordini = new Map();

    for(i in parole)
    {
        if (parole[i].length !== 0 && checkKeyWords(parole[i]))
        {
            console.log(parole[i])
            ordini.set(i, parole[i])
        }
    }

    //INIZIO RIGA ORDINI IN FILE HTML
    let orderStart = document.getElementById("orderStart")
}

//FUNZIONE PER FILTRARE LA STRINGA DEGLI ORDINI IN LOCAL STORAGE
function checkKeyWords(element)
{
    if(element !== "Dolci" && element !== "Bibite" && element !== "Primi" && element !== "Secondi" && element !== "prezzo" && element !== "amount")
        return true;
}

