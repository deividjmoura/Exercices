function sou() {
    var cdd = document.getElementById('cidade')
    var cd = cdd.value
    var res = document.getElementById('res')
    res.innerHTML = `<p>Você mora em ${cd}.</p>`
    if (cd == 'Brasil') {
        res.innerHTML += `<p>Você é Brasileiro.</p>`
    } else {
        res.innerHTML += `<p>Você é estrangeiro.</p>`
    }
}