function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique o ano e e tente novamente')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'babyM.webp')
        } else if (idade < 21) {
            img.setAttribute('src', 'boy.webp')
        } else if (idade < 60) {
            img.setAttribute('src', 'man.webp')
        } else {
            img.setAttribute('src', 'oldman.webp')
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'babyF.webp')
        } else if (idade < 21) {
            img.setAttribute('src', 'youngwoman.webp')
        } else if (idade < 60) {
            img.setAttribute('src', 'woman.webp')
        } else {
            img.setAttribute('src', 'oldwoman.webp')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}
}