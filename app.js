let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarChute() {
    console.log('O botão está dando retorno');
}

function verificarAlerta (){
    alert('Eu amo JS');
}

function verificarCidade(){
    let cidade = prompt('Digite a sua cidade');

    if (cidade) {
        alert(`Estive em ${cidade} e lembrei de você!`);
    }
}

function verificarSoma(){
    let numero1 = parseInt(prompt('Digite o primeiro número: '));
    let numero2 = parseInt(prompt('Digite o segundo número: '));
    let soma = 0;
    soma = numero1 + numero2;

    alert(`A soma dos valores ${numero1} e ${numero2} é ${soma}`);
}