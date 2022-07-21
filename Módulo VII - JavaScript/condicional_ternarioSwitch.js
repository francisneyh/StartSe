// CONDICIONAIS
let nota1 = 0;
let nota2 = 9;

function media(n1, n2) {
    return (n1 + n2)/2;
}

let resultado = media(nota1, nota2);


// OPERADOR TERNARIO CONDICIONAL - 3 OPERANDOS
// Tipo: ternario normal
let ternarioNormal = resultado >= 6 ? 'Aprovado' : 'Reprovado';
console.log(ternarioNormal);

// Tipo: ternario em cadeia 
let situacao = (resultado >= 6) ? `Aprovado com media ${resultado}` : 
               (resultado >= 4) ? `Recuperacao com media ${resultado}` :
                                  `Reprovado com media ${resultado}`;

console.log(situacao);



//MESMA COISA DO OPERADOR CONDICIONAL TENARIO SO COM IF ELSE
if (resultado >= 6) {
    situacao = `Aprovado com media ${resultado}`;
} else if (resultado >= 4) {
    situacao = `Recuperacao com media ${resultado}`;
}else{
    `Reprovado com media ${resultado}`;
}

console.log(situacao);




// SWITCH (ESCOLHA DE OPCOES-MENU)
// EX1:
let opcao = 2;

switch (opcao) {
    case 1:
        console.log('Entrega do tipo economica em ate 10 dias uteis');
        break;
    case 2:
        console.log('Entrega do tipo normal em ate 10 dias uteis');
        break;
    case 3:
        console.log('Entrega do tipo expressa em ate 10 dias uteis');
        break;
    default:
        console.log('Opcao de entrega invalida');
}

console.log('Logo apos a execucao do Switch');


// EX2:
let menu = 'economica';
switch (menu) {
    case 'economica':
        console.log('Entrega do tipo economica em ate 10 dias uteis');
        break;
    case 'normal':
        console.log('Entrega do tipo normal em ate 10 dias uteis');
        break;
    case 'expressa':
        console.log('Entrega do tipo expressa em ate 10 dias uteis');
        break;
    default:
        console.log('Opcao de entrega invalida');
}

console.log('Logo apos a execucao do Switch');