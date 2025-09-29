const nomes = document.querySelectorAll('.nome');
const botoes = document.querySelectorAll('.botao');


botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        nomes[index].innerText = 'Impressionante';
        botao.parentNode.classList.add('testejs');
    });
});