// TIPO DE DADO DE REFERENCIA

// FUNCAO - FUNCTION

// declaramos a funcao 
function exibirMensagem(primeiroNome, segundoNome) { // parametro
    alert(`Ola ${primeiroNome} ${segundoNome}, tudo bem?`);
}

// chamada ou invocacao da funcao
exibirMensagem('Francisney', 'Henrique'); //argumento
exibirMensagem('Francisco', 'Balbino'); //argumento



function mediaAritmeticaSimples(a, b){
    // let m = (a + b) / 2;
    // return m;
    return (a + b) / 2;
}

let resultado = mediaAritmeticaSimples(10, 5);

console.log(resultado);