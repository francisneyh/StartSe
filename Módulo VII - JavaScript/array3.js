// Tipo de Dado de Referencia
// ARRAY - ARRANJO - VETOR

// Array.from - CRIA UM ARRAY A PARTIR DE UMA STRING
const x = Array.from('ABNT');
console.log(x);



// INCLUDES - VERIFICA E TESTA SE O ELEMENTO ESTA PRESENTE NAQUELE ARRAY
const cidades = ['Rio', 'Foz', 'Limeira'];
console.log(cidades.includes('Foz')); //true
console.log(cidades.includes('Guaxupe')); //false


// INTERAR OU PERCORRER UM ARRAY PARA ACESSAR OS ITENS/ELEMENTOS (MAP)
// EXEMPLO 1
let nota = [7,9,2,5,4];

function adicionarUmPonto(nota){
    return nota + 1;
}

let notasAtualizadas = nota.map(adicionarUmPonto); //map retorna o resultado na forma de vetor/array, ou seja, gera um vetor novo. Nesse exemplo so retorna as notas, pois o map so retorna o valor
console.log(notasAtualizadas);


// EXEMPLO 2
const jogadores = [
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

function obtemNomeJogador(j){
    return j.nome;
}

function obtemPosicaoJogador(j){
    return j.posicao;
}

let nomeJogadores = jogadores.map(obtemNomeJogador); //map retorna o resultado na forma de vetor/array, ou seja, gera um vetor novo. Nesse exemplo so retorna o nome dos jogadores, pois o map so retorna o valor
console.log(nomeJogadores);

let posicoesJogadores = jogadores.map(obtemPosicaoJogador); //map retorna o resultado na forma de vetor/array, ou seja, gera um vetor novo. Nesse exemplo so retorna o nome dos jogadores, pois o map so retorna o valor
console.log(posicoesJogadores);
console.log(posicoesJogadores[3]);



// FILTER - SO PERCORRE O ARRAY E RETORNA TODO ELEMENTO DO VETOR E NAO APENAS O VALOR COMO O MAP
// USANDO O EXEMPLO 2 PARA FILTAR
function obtemVolante(jogador){
    return jogador.posicao === 'Volante';
}

const volantes = jogadores.filter(obtemVolante);
console.log(volantes);



//FOREACH (PARA CADA) - VAI PERCORRER CADA UM DOS ELEMENTOS DO VETOR, SO PERCORRE OS ELEMENTOS, NAO RETORNA, MAS PODE EXECUTAR UM TIPO DE ACAO
function exibeNomeJogador(jogador){
    console.log(jogador.nome);
}

jogadores.forEach(exibeNomeJogador);


