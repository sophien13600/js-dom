// const div =window.document.getElementById('intro')
// console.log(div);
const div = document.getElementById('intro')
console.log(div);

// const pRouges = document.getElementsByClassName('rouge')
// console.log(pRouges)
// for(const element of pRouges){
//     console.log(
//         element
//     );
const pRouges = div.getElementsByClassName('rouge')
console.log(pRouges)
for(const element of pRouges){
    console.log(
        element
    );
}

const paragraphes = document.getElementsByTagName('p')
for (const element of paragraphes){
    console.log(element);
    
}


// const p = document.querySelectorAll("p:not(first-child")
// console.log(p);
const p = document.querySelector("p:not(first-child")
console.log(p);