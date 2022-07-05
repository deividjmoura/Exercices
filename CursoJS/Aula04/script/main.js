/*var nome = window.prompt('Qual o seu nome?')
document.write(`Olá, ${nome}. Seu nome tem ${nome.length} letras.<br>`)
document.write(`Seu nome em maiúsculas fica ${nome.toUpperCase()},<br>`)
document.write(`e em minúsculas fica ${nome.toLocaleLowerCase()}.`) 

var n1 = parseInt(prompt('um numero'))
document.write(`asdas ${n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)  */
var a = document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', enter)
a.addEventListener('mouseout',out)

function clicar() {
    a.innerHTML = 'clicou'
}

function enter() {
    a.innerText = 'entrou'
}

function out() {
    a.innerText = 'saiu'
}