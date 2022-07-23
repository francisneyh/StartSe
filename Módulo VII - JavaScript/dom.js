const lista = document.querySelector('#lista');

const elementoLI = document.createElement('li');
elementoLI.textContent = 'Um novo item na lista';

// Exemplo 1:
/*
lista.appendChild(elementoLI);

const filhosDaLista = lista.querySelectorAll('li');


for(filho of filhosDaLista){
    lista.removeChild(filho);
}
*/

//lista.remove(); 




// Exemplo 2:

// lista.className = "novoponteiro"; // altera/adiciona a propriedade do elemento 1-modo

// lista.setAttribute('class', 'novoponteiro'); // adiciona atributo class novoponteiro ao elemento 2-modo


// lista.removeAttribute('class'); // remove atributo class do elemento

// lista.style.color = 'red'; // muda/altera a cor do style do css em um documetno html para vermelho



// Exemplo 3: 
const botao = document.querySelector('button');

botao.addEventListener('click', function() {
    lista.remove();
}
);




console.log(lista);