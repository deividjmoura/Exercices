var a = document.getElementById('area')
a.addEventListener('click', click)
a.addEventListener('mouseenter', enter)
a.addEventListener('mouseout', out)

function click() {
    a.innerText = 'Clicked!'
    a.style.background = 'green'
}

function enter() {
    a.innerText = 'Entered!'
}

function out() {
    a.innerText = 'Out!'
}

