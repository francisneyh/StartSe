// ESCOPO DE VARIAVEIS E CONSTANTES


let x = 10; // variavel global

console.log(x);

function soma(a, b) {
    console.log(x);
    let z = a + b; // z é uma variavel local
    // alert('ola');
    return z;
}


let a = 50;
console.log(a);

// console.log(z);
console.log(soma(4, 23));



// CONSTANTE
const gravidade = 9.8; //variavel global

console.log (gravidade);

function calculaVelocidadeQuedaLivre(tempo) {
    const resultado = gravidade * tempo;
    return resultado;
}

console.log(calculaVelocidadeQuedaLivre(30));

const resultado = 0;

console.log(resultado);