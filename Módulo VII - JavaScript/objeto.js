//OBJETO - OBJECT

const pessoa = {
    primeiroNome: 'Francisney',
    ultimoNome: 'Henrique',
    endereco: {
        rua: 'Oliveira',
        num: 130
    },
    nomeCompleto: function() {
        return this.primeiroNome + ' ' + this.ultimoNome;
    }
};

pessoa.celular = '991234';

pessoa.enderecoCompleto = function() {
    return `Rua: ${this.endereco.rua}, ${this.endereco.num}.`;
}

function exibirDadosPessoa(p) {
    // console.log(`\n
    alert(`\n
        Nome: ${p.nomeCompleto()}\n
        Endereco: ${p.enderecoCompleto()}\n
        Celular: ${p.celular}
    `)
}

exibirDadosPessoa(pessoa);