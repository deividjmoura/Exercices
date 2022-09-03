let esforco = 'constante'
let saude = 'boa'
let habitos = 'foco e determinação!'
let objetivo = 'Ser uma pessoa satifeita'
let destino = ''
const futuro = `O resultado de esforço ${esforco}, uma saúde ${saude} ${habitos}`
let final = document.querySelector('span#final')


if (futuro === 'O resultado de esforço constante, uma saúde boa foco e determinação!') {
    destino = 'Será maravilhoso'
} else {
    destino = 'Será muito triste'
}
