const listaTarefas = document.querySelector('#listaTarefas');
const caixaTexto = document.querySelector('#caixaDeTexto');
const botaoAdicionar = document.querySelector('#botaoAdicionar');

botaoAdicionar.addEventListener('click', function() {
    const textoDaTarefa = caixaTexto.value;
    caixaTexto.value = '';
    listaTarefas.appendChild(adicionaTarefa(textoDaTarefa)); 
    // console.log(listaTarefas);   
    caixaTexto.focus();
});

function adicionaTarefa(textoDaTarefa) {
    const elementoLI = document.createElement('li');
    const elementoSPAN = document.createElement('span');

    elementoSPAN.setAttribute('id', 'tarefa');
    elementoSPAN.textContent = textoDaTarefa;

    elementoLI.appendChild(elementoSPAN);
    elementoLI.appendChild(adicionaBotaoRemover())

    //console.log(elementoSPAN);
    console.log(elementoLI);

    return elementoLI;
}

function adicionaBotaoRemover(){
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = '✗';
    botaoRemover.className = 'remover';
    console.log(listaTarefas);

    botaoRemover.addEventListener('click', function(){
        listaTarefas.removeChild(this.parentNode);
        }
    );
    
    return botaoRemover;
}