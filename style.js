const p= document.querySelector('p')
function afficherEnGras(){
     p.style['fontWeight']= 'bold'
}
function afficherEnItalic(){
     p.style['fontStyle']= 'italic'
}
function souligner(){

     p.style['textDecoration']= 'underline'
}
function supprimerStyle(){
    p.removeAttribute('style')
}
