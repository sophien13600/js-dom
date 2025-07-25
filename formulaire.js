const input = document.getElementById('nom')
function direBonjour(){
    //console.log(input.value);
    //alert(`Bonjour ${input.value}`);
    // confirm(`Bonjour ${input.value}`);
    //prompt(`Bonjour ${input.value}`);
    const div = document.getElementById( 'afficheur')
    const bouton = document.querySelector('button')
     const sports = document.getElementById('sports')
    const genre = document.getElementById('genre')
     console.log(sports.options);
    input.setAttribute('readonly', 'readonly')
    bouton.setAttribute('disabled', 'disabled')
        let liste = ""
    for (const sport of sports) {
        if (sport.selected) {
            liste += sport.value + " ";

        }
    }
 //       div.innerHTML =`Bonjour ${genre.value}  ${input.value}`
     div.innerHTML = `Bonjour ${genre.value} ${input.value}, vous pratiquez les sports suivants : ${liste}`
    div.style['font-weight'] = 'bold'
    input.setAttribute('readonly', 'readonly')
    bouton.setAttribute('disabled', 'disabled')
}
    
