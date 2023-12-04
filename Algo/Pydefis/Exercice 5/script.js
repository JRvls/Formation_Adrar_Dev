// fonction qui reçoit une combinaison de 3 nombres et qui retourne vrai si la combinaison est correcte.
function boeuf(roux,noir,blanc){
    let total = roux + noir + blanc;
    
    if (noir > blanc*2){
        return false;
    }

    if (total > 1000) {
        return false;
    } 

    if ( blanc > roux || roux > noir ){
        return false;
    }
    
    if (roux * noir * blanc != total*777){
        return false;
    }

    return true;
}
   
for (let roux = 1; roux <= 1000; roux++){
    for (let noir = 1; noir <= 1000; noir++){
        for (let blanc = 1; blanc <= 1000; blanc++){
            //si la combinaison roux,noir,blanc est correcte, c'est gagné, on affiche roux,noir,blanc
            if (boeuf(roux,noir,blanc)){
                console.log(roux,noir,blanc)
            }
        }
    }
} 