function recupererParent() {
    //acceder au premier paragraphe de la page
    const p = document.querySelector('p')
    //acceder au parent du noeud 'p '
    console.log(p.parentNode);

}
function recupererEnfantsHTML() {
    //acceder au premier div de la page
    const div= document.querySelector('div')
    for (const element of div.children) {
        console.log(element.innerHTML);
    }

}
function recupererEnfants() {
    const div = document.querySelector('div')
    // children : element HTML
    for (const element of div.childNodes) {
        console.log(element);
    }
}