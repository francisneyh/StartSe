// CADEIA DE CARACTERES

let nome = 'Ney';

let idade = 31;

// CONCATENAR STRINGS
let conc = nome + ', ' + idade + ' anos.'; // concatenar com operador + 
conc = `${nome}, ${idade} anos.`; // concatenar com crase ` `

console.log(nome.length); // tamanho da string
console.log(nome.toUpperCase()); // converte string maiscula
console.log(nome.toLowerCase()); // converte string minuscula

let localizacao = 'Guaxupe - MG';
console.log(localizacao.length)
// let estado = localizacao.substring(10); //extrai uma parte da string
let estado = localizacao.substring(localizacao.length-2); //extrai uma parte da string
console.log(estado);


// Obter indice-posicao de uma string
const frase = 'Minha cor favorita e: preto';
const indice =  frase.indexOf(':'); //obtem o indice-posicao
const cor = frase.substring(indice+2);
console.log(cor);



// ALTERAR-SUBSTITUIR PALAVRAS-CARACTERES DE UMA STRING
let texto = 'basquete';
let novoTexto = texto.replace('bas', 'ra'); // substitui caracteres-palavras de uma string
console.log(novoTexto);
console.log(texto);

// ALTERAR-SUBSTITUIR VARIAS OCORRENCIAS DE UMA PALAVRA NA STRING
let frase2 = 'A festa ocorrera no primeiro dia do primeiro mes';
let novaFrase = frase2.replaceAll('primeiro', 'segundo'); // substitui varias ocorrencias de caracteres-palavras de uma string
console.log(novaFrase);







