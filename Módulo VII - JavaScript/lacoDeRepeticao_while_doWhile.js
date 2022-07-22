// LAÇOS DE REPETIÇÃO - LOOPS

// FOR

// EXEMPLO 1:

let  jogadores = [
    {
        nome: 'Beto',
        posicao: 'Atacante'
    },
    {
        nome: 'Gil',
        posicao: 'Zagueiro'
    },
    
    {
        nome: 'Milton',
        posicao: 'Volante'
    },
    
    {
        nome: 'Nuno',
        posicao: 'Volante'
    }    
];

for(let jogador of jogadores){ // outro modo de fazer o for, onde se cria uma variavel com o nome diferente do array, esse metodo somente percorre o array e nao faz verificacao logica
    console.log(jogador.nome)
    console.log(jogador.posicao)
}



// WHILE
const operacoes = ['soma', 'subtracao', 'multiplicacao', 'divisao'];

let i = 0;

while(i < operacoes.length){
    console.log(operacoes[i]);
    i++;
}



// DO WHILE
let j = 0;

do {
   // alert('Ola, tudo bem?');
    console.log(`${j} - ${operacoes[j]}`);
    j++;
}while(j < operacoes.length);



