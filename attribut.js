const divIntro = document.getElementById('intro')
// console.log(divIntro.textContent);
// console.log(divIntro.innerHTML);

// const pRouges = document.getElementsByClassName('rouge')
// // console.log(pRouges.innerHTML);

// for (const element of pRouges) {
//     console.log(element.innerHTML);
    
// }

const lang = divIntro.getAttribute('lang')
console.log(lang);

function changerLien(){
    const link =document.querySelector('a')
    link.setAttribute('href', 'https://www.francefootball.fr')
}
