// let heure = 12;

// if(heure< 12){
//     console.log("c'est le matin")
// }

// else if (heure>12){
//     console.log( "c'est l'après-midi")
// }

// else if (heure == 12){
//     console.log("il est midi")
// }


// switch(heure){

//     case (heure) < 12:
//     console.log("c'est le matin");
//     break;

//     case (heure) > 12:
//     console.log("c'est l'après-midi");
//     break;

//     case (heure) == 12:
//     console.log("il est midi");
//     break;

//     default:
//         console.log("le jour de la semaine n'est pas reconnu")
//         break;

// breack dans le default n'est pas obligatoire, cela ne change rien
// }

// let jour = prompt("Entrez un jour de la semaine")


// switch(true){

//     case (jour) == 'lundi' :
//     console.log("c'est Lundi");
//     break;

//     case (jour) == 'mardi' :
//     console.log("c'est mardi");
//     break;

//     case (jour) == 'mercredi' :
//     console.log("c'est mercredi");
//     break;

//     case (jour) == 'jeudi' :
//     console.log("c'est jeudi");
//     break;

//     case (jour) == 'vendredi' :
//     console.log("c'est vendredi");
//     break;

//     case (jour) == 'samedi' :
//     console.log("c'est samedi");
//     break;

//     case (jour) == 'dimanche' :
//     console.log("c'est dimanche");
//     break;

//     default:
//         console.log("le jour de la semaine n'est pas reconnu")
//         break;
// }
        //ou

        let jour = prompt("Entrez un jour de la semaine")

        switch(jour){

            case 'lundi' :
            console.log("c'est Lundi");
            break;
        
            case 'mardi' :
            console.log("c'est mardi");
            break;
        
            case 'mercredi' :
            console.log("c'est mercredi");
            break;
        
            case 'jeudi' :
            console.log("c'est jeudi");
            break;
        
            case 'vendredi' :
            console.log("c'est vendredi");
            break;
        
            case 'samedi' :
            console.log("c'est samedi");
            break;
        
            case 'dimanche' :
            console.log("c'est dimanche");
            break;
    
            default:
            console.log("le jour de la semaine n'est pas reconnu")
             break;
}
