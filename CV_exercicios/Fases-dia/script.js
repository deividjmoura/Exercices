function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var bg = window.document.getElementById('bg')
var data = new Date()
var hora = 12 //data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 6 && hora < 12) {
    img.src = "manha.webp"
    msg.innerHTML += '<br> Bom dia!'
    document.body.style.background = 'rgba(54, 216, 129, 0.515)'
    bg.style.backgroundColor = 'rgba(54, 216, 129, 0.515)'
} else if (hora >= 12 && hora <= 18) {
    img.src = "tarde.webp"
    msg.innerHTML += '<br> Boa tarde!'
    document.body.style.background = 'rgba(238, 152, 23, 0.515)'
    bg.style.backgroundColor = 'rgba(238, 152, 23, 0.515)'
} else {
    img.src = "noite.webp"
    msg.innerHTML += '<br> Boa noite!'
    document.body.style.background = 'rgba(56, 84, 242, 0.515)'
    bg.style.backgroundColor = 'rgba(56, 84, 242, 0.515)'
}
}   