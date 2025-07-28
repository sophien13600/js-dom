const indice = document.getElementById('indice')  
const commentaires = document.getElementById('commentaires')
const commentaire = document.querySelector('textarea')
let couleur = 'red'
function ajouter(){
//params = [commentaire.value]
//console.log(params);


//string template ``
//concept SOC
couleur = (couleur == 'red') ? 'blue' : 'red'
// commentaires.innerHTML += `<p style="color:${couleur}">${commentaire.value}</p>`
//permet de creer un element
const p = document.createElement('p')
const button = document.createElement('button')
//button.value = commentaires.removeChild('p') 
button.textContent = 'supprimer'
button.setAttribute('onclick','supprimer()')

//on attribut du contenu a cette balise
p.innerHTML = commentaire.value
p.style['color'] = couleur
//on ajoute a la div , on l'attache au DOM
p.appendChild(button)
button.onclick = () => p.remove()   

if (indice.value) {
    commentaires.insertBefore(p, commentaires.children[indice.value - 1])
}else{
    commentaires.appendChild(p)

}
    commentaire.value = ''
    autofocus(commentaires)
  }
    
    //console.log(affichage.innerHTML);
    // return affichage.innerHTML
    //     const commentaire = document.getElementById('commentaire')
    // const commentaires = document.getElementById('commentaires')
    // let couleur = 'red'
    // function ajouter() {
        //     couleur = (couleur == 'red') ? 'blue' : 'red'
//     commentaires.innerHTML += `<p style="color:${couleur}">${commentaire.value}</p>`
//     commentaire.value = ''
// }
// function supprimer(){
// //   let = com document.querySelector() 
// remove()
// }


// i =0
 function supprimer(){

          //on veut supprimer le noeud qui  a  cet indice
// commentaires.removeChild(commentaires.children[indice.value - 1])
const children = commentaires.children 
    if (indice.value >= 0 && indice.value <= children.length) {
        commentaires.removeChild(children[indice.value - 1])
    } else {
        alert(`Indice (${indice.value}) introuvable`)
    }
 }




//  const commentaire = document.getElementById('commentaire')
// const commentaires = document.getElementById('commentaires')
// let couleur = 'red'
// function ajouter() {
//     couleur = (couleur == 'red') ? 'blue' : 'red'
//     // commentaires.innerHTML += `<p style="color:${couleur}">${commentaire.value}</p>`
//     // créer la balise
//     const p = document.createElement('p')
//     const button = document.createElement('button')
//     // ajouter le contenu de la balise
//     p.innerHTML = commentaire.value
//     p.className = "alert alert-secondary"
//     button.style['marginLeft'] = '20px'
//     button.innerHTML = "Supprimer"
//     // modifier le style
//     p.style['color'] = couleur
//     button.classList.add('btn', 'btn-danger')
//     p.appendChild(button)
//     // button.onclick = () => p.remove()
//     button.onclick = () => p.remove()
//     // attacher l'élément au DOM
//     const indice = document.getElementById('indice')
//     const children = commentaires.children
//     if (indice.value && !isNaN(indice.value) && indice.value >= 0 && indice.value <= children.length) {
//         commentaires.insertBefore(p, commentaires.children[indice.value - 1])
//     } else {
//         commentaires.appendChild(p)

//     }
//     commentaire.value = ''
//     commentaire.autofocus = true
// }

// function supprimerParIndice() {
//     const indice = document.getElementById('indice')
//     const children = commentaires.children
//     if (!isNaN(indice.value) && indice.value >= 0 && indice.value <= children.length) {
//         commentaires.removeChild(children[indice.value - 1])
//     } else {
//         alert(`Indice (${indice.value}) introuvable`)
//     }
// }