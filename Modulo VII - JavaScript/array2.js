// Tipo de Dado de Referencia
// ARRAY - ARRANJO - VETOR

const cidades = [];

// PUSH - ADICIONA ELEMENTOS NO FINAL DO ARRAY
cidades.push('Rio'); // adiciona elemento no comeco
console.log(cidades);
cidades.push('Sao Paulo', 'Cuiaba', 'Brasilia'); // adiciona elementos no comeco
console.log(cidades);



// UNSHIFT - ADICIONA ELEMENTOS NO COMECO DO ARRAY
cidades.unshift('Campinas', 'Araras'); // adiciona elemento no comeco
console.log(cidades);



// POP - REMOVE O ULTIMO ELEMENTO - RETORNA O ELEMENTO REMOVIDO
// cidades.pop(); //remove a ultima cidade/elemento
let cidadeRemovida = cidades.pop(); // remove a ultima cidade/elemento
console.log(cidadeRemovida);
console.log(cidades);   



// SHIFT - REMOVE O PRIMEIRO ELEMENTO - RETORNA O ELEMENTO REMOVIDO
cidadeRemovida = cidades.shift(); // remove a primeira cidade/elemento
console.log(cidadeRemovida);
console.log(cidades);   


// SPLICE - REMOVE O UM OU MAIS ELEMENTOS - UTILIZANDO UM INDICE/POSICAO DO VETOR/ARRAY
const indice = cidades.indexOf('Rio'); // obtem o indice, no caso obteu o indice/posicao 1
console.log(indice);
//cidades.splice(indice, 1); // remove um elemento, este na posicao 1
cidades.splice(indice); // remove todos os elementos a partir desse indice/posicao 1  em diante
console.log(cidades);



// CONCAT - CONCATENACAO DE ARRAYS
const cidadesInterior = ['Araraquara', 'Araras', 'Limeira'];
console.log(cidadesInterior);
const regioesMetropolitanas = ['Campinas', 'Sao Paulo'];
console.log(regioesMetropolitanas);
const cidadesInteriorEmetropolitana = cidadesInterior.concat(regioesMetropolitanas); // concatena os arrays cidadesInterior e regioesMetropolitanas
console.log(cidadesInteriorEmetropolitana);