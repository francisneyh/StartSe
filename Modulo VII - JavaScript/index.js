/*alert('Olá, seja bem vindo');
document.write('Essa é nossa primeira vídeo aula');*/
 
document.querySelector('#t2').textContent = 'Exemplificando algumas funcionalidades';

// const nome = prompt('Qual é o seu nome ?');

// alert(`Que bom ter você aqui ${nome}! \n Vamos começar?`);

// esconde a mensagem e esconde o form de login
/*
function bemVindo(){
    const nome = document.querySelector('#nomeUsuario').value;
    alert(`Olá ${nome}! Seja bem-vindo`);
    document.getElementById('formularioLogin').style.display = 'none';
}
*/

function mudaCorFundo(){
   const menu = document.querySelector('#coresFundo');
   const cor = menu.options[menu.selectedIndex].value;
   document.body.style.background = cor;
}