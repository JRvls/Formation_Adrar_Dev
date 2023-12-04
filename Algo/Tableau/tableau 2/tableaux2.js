// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
let tab = [150, 200, 25, 300, 50, 150, 300, 450, 891, 25, 67, 25, 150, 784];
let tab2 = [-15, 48, -56, 48, 48, 48, -15, -56, 3, 78, 48];
let tab3 = [78, 549, -69, -78, 693, 10, -589, 457,]
function lastElement(t){
    console.log(t[t.length-1]);
}
// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function lastElement(t){
    return (t[t.length-1]);
}

// test de la fonction lastElement
console.log("# Exercice 1");
console.log("Affiche ma dernière valeur du tab");
console.log(lastElement(tab));
console.log("Affiche ma dernière valeur du tab2");
console.log(lastElement(tab2));
console.log("Affiche ma dernière valeur du tab3");
console.log(lastElement(tab3));
// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.

function minElement(t){
    let v = t[0];
    for (let i = 0 ; i < t.length ; i++){
        if (t[i]<v){
            v = t[i];
        }
    } 
    return v; 
}
// test de la fonction minElement
console.log("# Exercice 2");
console.log("Affiche ma valeur MIN du tab");
console.log(minElement(tab));
console.log("Affiche ma valeur MIN du tab2")
console.log(minElement(tab2));
console.log("Affiche ma valeur MIN du tab3")
console.log(minElement(tab3));
// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function maxElement(t){
    let x = t[0];
    for (let i = 0 ; i < t.length ; i++){
        if (t[i]>x){
            x = t[i];
        }
    } 
    return x; 
}

// test de la fonction maxElement
console.log("# Exercice 3");
console.log("Affiche ma valeur MAX du tab"); 
console.log(maxElement(tab));
console.log("Affiche ma valeur MAX du tab2");
console.log(maxElement(tab2));
console.log("Affiche ma valeur MAX du tab3");
console.log(maxElement(tab3));
// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
function numElement(tableau, nombreACompter){
    let count = 0
    for (let i = 0 ; i < tableau.length ; i++){
        if (tableau[i] == nombreACompter){
            count++;    
        }
    } 
    return count; 
}

// test de la fonction numElement
console.log("# Exercice 4");
console.log("Affiche mon nombre de fois que ce nombre apparait")
console.log(numElement(tab, 25));
console.log("Affiche mon nombre de fois que ce nombre apparait")
console.log(numElement(tab2, 0));
console.log("Affiche mon nombre de fois que ce nombre apparait")
console.log(numElement(tab3, -78));
// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
// Note : il y a une variante plus compliquée de cet exo, tout en bas de la feuille !
function booElement(tableau, nombreAChercher){
    
    let boo = false;
    for (let i = 0 ; i < tableau.length ; i++){
        if (tableau[i] == nombreAChercher){
            boo=true;    
        }else{
             boo=false;
        }
    } 
    return boo;
}
console.log("# Exercice 5");
console.log("Affiche si le nombre existe : 48 pour tab");
console.log(booElement(tab, 48));
console.log("Affiche si le nombre existe : 48 pour tab2");
console.log(booElement(tab2, 48));
console.log("Affiche si le nombre existe : 48 pour tab3");
console.log(booElement(tab3, 48));
// Créer un tableau qui contient [1,2,3,...,7777].
let tab4 = [];

for (let i = 1 ; i < 7778 ; i++){
    tab4.push(i);
}

// test tableau jusqu'à 7777
console.log("# Exercice 6");
console.log(tab4);

// Créer un tableau qui contient [10,20,30,...,77770].
let tab5 = [];

for (let i = 1 ; i <= 7777; i++){
    tab5.push(i*10);
}

// test tableau jusqu'à 77770
console.log("# Exercice 7");
console.log(tab5);
// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
let tab6 = [];

for (let i = 0 ; i < tab5.length; i++){
    tab6.push(tab5[i]/2);
}

// test tableau jusqu'à 77770
console.log("# Exercice 8");
console.log(tab6);
// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]
let tab7 = [1,45,88,54,23,-100,12];
function supress(n){
    for (let i = 0 ; i < tab7.length ; i++){

        if (tab7[i] < 50){
                tab7.pop()
        }
    }
    console.log(tab7);
}

// test tableau supprimer les dernières valeurs au dessus de 50.
console.log("# Exercice 9");
supress(tab7);
// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.
let plusGrand = 0;
let plusGrand2 = 0;
function valeurPlusGrande2(t){
    for (let i = 0 ; i < t.length ; i++){
        if (t[i] > plusGrand){
            plusGrand2 = plusGrand;
            plusGrand = t[i];
        } else if (t[i] > plusGrand2){
            plusGrand2 = t[i];
        }
    }
    return plusGrand2;
}

// test tableau qui prend la deuxième plus grande valeur.
console.log("# Exercice 10");
console.log(valeurPlusGrande2(tab7));
// [Bonus] Suite de l'exo de recherche de valeur : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?
