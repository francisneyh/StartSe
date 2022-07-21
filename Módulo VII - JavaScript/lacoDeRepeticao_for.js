// LAÇOS DE REPETIÇÃO - LOOPS

// FOR
// EXEMPLO 1:
const listaNumeros = [23,45,76,12,89];

for(let i = 0; i < listaNumeros.length; i++) {
    console.log(listaNumeros[i]);
}

// console.log(listaNumeros[0]);
// console.log(listaNumeros[1]);
// console.log(listaNumeros[2]);
// console.log(listaNumeros[3]);
// console.log(listaNumeros[4]);



// EXEMPLO 2:
const operacoes = ['soma', 'subtracao', 'multiplicacao', 'divisao'];

function montaTextoDaLista() {
    let textoDaLista = '';
    for(let i = 0; i < operacoes.length; i++) {
        textoDaLista += '<li>' + operacoes[i] + '</li>';
    }
    return textoDaLista;
}

document.querySelector('#listaOperacoes').innerHTML = montaTextoDaLista();

// <li>soma</li><li>subtracao</li>