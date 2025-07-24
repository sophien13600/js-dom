function changerImage() {
    // const img = document.querySelector('img')
    // if (img.getAttribute('src').includes('mario')) {
    //     img.setAttribute('src', "./images/luigi.png")
    // } else {
    //     img.setAttribute('src', "./images/mario.png")

    // }
  //  const img = document.querySelector('img')
    let images = [
        "./images/bowser.png",
        "./images/luigi.png",
        "./images/mario.png",
        "./images/peach.png",
        "./images/toad.png",
        "./images/toadette.png",
        "./images/yoshi.png",

    ]   
    // a chaque click set attribute avec element du tableau




    const img = document.querySelector('img')
    const src = img.getAttribute('src')
    // je cherche l'index de mario
    const index = images.indexOf(src)
    //je rajoute 1 a l'index  et quand le reste est egale à zero on retourne au debut du tableau
    const next = (index + 1) % images.length
    img.setAttribute('src', images[next])
}

let interval;
function arreter() {
    clearInterval(interval)
}
function demarrer() {
    interval = setInterval(
        changerImage,
        1000
    )
}

