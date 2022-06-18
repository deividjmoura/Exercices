// date and hour
exports.getDataHora = function () {
    return Date();
};

// calculator
exports.sum = function(x, y) {
    return x + y;
}

exports.subtract = function(x, y) {
    return x - y;
}

exports.multiply = function(x, y) {
    return x * y;
}

exports.division = function(x, y) {
    return x / y;
}

// to travelCousts
exports.autonomia = function(consumo, precoComb, abastecido) {
    let litros = abastecido / precoComb;
    return (litros * consumo).toFixed(0) + 'km';
}
exports.consumo = function(distancia, precoComb, abastecido) {
    let litros = abastecido / precoComb;
    return (distancia / litros).toFixed(0) + 'km/l'
}