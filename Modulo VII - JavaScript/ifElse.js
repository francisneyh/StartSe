// CONDICIONAIS
let nota1 = 5;
let nota2 = 9;

function media(n1, n2) {
    return (n1 + n2)/2;
}

let resultado = media(nota1, nota2);
// console.log(resultado);

// IF - SE ... ELSE - SENAO
if(resultado >= 0) {
    console.log(`Media ${resultado} > 0`);
}
console.log('Ola');

// EXEMPLO 1 COM CONDICIAL DE MAIOR E IGUAL: 
if(resultado >= 6) {
    console.log(`Aprovado com media ${resultado}.`);
}else if(resultado >= 4) {
    console.log(`Recuperacao com media ${resultado}.`);
}else {
    console.log(`Reprovado com media ${resultado}.`);
}

console.log('logo apos os ifs e elses');


// EXEMPLO 2 COM CONDICIONAL OU-OR-||: 
if(nota1 === 0 || nota2 ===0) {// pelo menos 1 condicao deve ser verdadeira
    console.log(`Desclassificado, pois pelo menos uma das notas e igual a 0.`)
}else {
    console.log(`Classificado, pois ambas as notas sao diferentes de 0.`)
}


// EXEMPLO 1 COM CONDICIONAL E-AND-&&: 
if(nota1 > 7 && nota2 >7) { // ambas condicoes devem ser verdadeiras
    console.log(`Voce teve um excelente desempenho.`)
}else {
    console.log(`Voce teve um desempenho razoavel ou satisfatorio.`)
}