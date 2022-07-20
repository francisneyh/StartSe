// Tipo de Dado de Referencia
// ARRAY - ARRANJO - VETOR

// DECLARANDO ARRAY
let array = []; // array vazio
let produtos = ['camiseta', 'calca', 'blusa']
console.log(produtos);
console.log(produtos.length);
console.log(produtos[2]);



// MUDANDO O VALOR DA POSICAO DE UM ARRAY
produtos[0] = 10;
produtos[2] = 'tenis';
console.log(typeof produtos);



// INSERINDO OBJETOS DENTRO DE UM ARRAY
let jogadores = [
    {
        nome: 'Beto',
        posicao: 'Atacante'
    },
    {
        nome: 'Gil',
        posicao: 'Zagueiro'
    },
];

console.log(jogadores);
console.log(typeof jogadores[0]);



// DIVIDE UM VALOR PARA UM ARRAY - SPLIT
const email = 'fulano@email.com';
let emailArray = email.split('@');
console.log(emailArray);
console.log(emailArray[1]);


const palavraChave = 'cinema, futebol, televisao, viagem, boliche';
const hobbies = palavraChave.split(',');
console.log(hobbies);
console.log(hobbies[4]);
console.log(hobbies[hobbies.length-1]);



// TRANSFORMA O ARRAY EM UMA STRING TOSTRING OU JOIN
const tiposHobbies = hobbies.toString();
console.log(tiposHobbies);
console.log(typeof tiposHobbies);

//COM JOIN AGORA
const tiposHobbies2 = hobbies.join('|');
console.log(tiposHobbies2);
