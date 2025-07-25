const p = document.querySelector('p:last-of-type')

console.log(p);
console.log(p.className);// renvoi string
console.log(p.classList);// renvoie un tableau  readOnly    
console.log(p.classList.item(0));// renvoie un tableau  
console.log(p.classList[0]);// renvoie un tableau  
console.log(p.classList.length);// renvoie un tableau  


console.log(p.classList.contains('bleu'));
console.log(p.classList.contains('rouge'));
console.log( document.querySelectorAll('p'));


function supprimerClasse(){
    let classes = p.classList
    classes.remove('rouge');

}
function ajouterClasse() {
    let classes = p.classList

    classes.add('vert')
}

function basculerClasse() {
    let classes = p.classList
     classes.toggle('rouge')
}

function remplacerClasse() {
    let classes = p.classList
    classes.replace('rouge','vert')
}
function changerCouleurV1(){
    //rouge devient bleu bleu devient rouge


    const paragraphes = document.querySelectorAll('p')
    for (const p of paragraphes) {
        p.classList.toggle('rouge')
        p.classList.toggle('bleu')
    }
}
function changerCouleur() {
    const paragraphes = document.querySelectorAll('p')
    for (const p of paragraphes) {
        const classes = p.classList
        if (classes.contains('bleu')) {
            classes.add('rouge')
            classes.remove('bleu')
        } else if (classes.contains('rouge')) {
            classes.add('vert')
            classes.remove('rouge')
        } else {
            classes.add('bleu')
            classes.remove('vert')
        }
    }
}
function afficherItalic(){
    //p.style.fontStyle= 'italic'
    p.style['fontStyle']= 'italic'
}