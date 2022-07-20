// ESCOPO DE VARIAVEIS E CONSTANTES

function calcularKmMilha(){
    let km = document.querySelector('#valorKm').value;
    document.querySelector('#resultado').textContent = km * 1.609;
}