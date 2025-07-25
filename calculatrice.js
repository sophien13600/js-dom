

const v1 = document.getElementById('valeur1')
const v2= document.getElementById('valeur2')
const div = document.getElementById('afficher')
const operand = document.getElementById('operateur')


function calculer(){
//console.log(operand.value);
let number1 =Number(`${v1.value}` )
let number2 =Number(`${v2.value}` )
//let operateur = `${operand.value}`
        
if(operand.value =='+'){
    resultat = number1 +number2
}else if(operand.value =='-'){

    resultat = number1 - number2
}else if(operand.value =='*'){
    
    resultat = number1 * number2
}else if(operand.value == '/'){

    resultat = number1 / number2
}
// console.log(typeof(operand.value));
    div.innerHTML=resultat

}
function afficher(){
    let 
}


/**********************************
Correction Achref
**********************************/


// const afficheur = document.getElementById('afficheur')
// const valeur1 = document.getElementById('valeur1')
// const valeur2 = document.getElementById('valeur2')

// function calculer(op) {
//     if (isNaN(valeur1.value) || isNaN(valeur2.value)) {
//         afficheur.innerHTML = "Les deux champs doivent contenir des valeurs numériques"
//     } else {
//         switch (op) {
//             case '+':
//                 afficheur.innerHTML = `${valeur1.value} ${op} ${valeur2.value} = ${Number(valeur1.value) + Number(valeur2.value)}`
//                 break;
//             case '-':
//                 afficheur.innerHTML = `${valeur1.value} ${op} ${valeur2.value} = ${Number(valeur1.value) - Number(valeur2.value)}`
//                 break;
//             case '*':
//                 afficheur.innerHTML = `${valeur1.value} ${op} ${valeur2.value} = ${Number(valeur1.value) * Number(valeur2.value)}`
//                 break;
//             case '/':
//                 if (valeur2.value == 0) {
//                     afficheur.innerHTML = "Problème de division par zéro"
//                 } else {
//                     afficheur.innerHTML = `${valeur1.value} ${op} ${valeur2.value} = ${Number(valeur1.value) / Number(valeur2.value)}`
//                 }
//                 break;

//         }
//     }
// }