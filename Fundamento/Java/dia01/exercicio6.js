// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras
// minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

const xadrexpeca = 'torre';
switch (xadrexpeca.toLowerCase()){
    case 'dama':
        console.log('dama-> uma casa em qualquer direção.');
        break;
    case 'bispo':
        console.log('bispo-> diagonal.');
        break;
    case 'rainha':
        console.log('rainha-> diagonal, horizontal e vertical.');
        break;
    case 'cavalo':
        console.log('cavalo-> "L" podepular sobre as peças.');
        break;
    case 'torre':
        console.log('torre-> anda qualquer casa em linha reta na horizontal e vertical');
        break;
    case 'peão':
        console.log('peão-> uma casa para frente, na primeira jogada pode ser 2 casas.');
        break;
    default:
        console.log('errado! errou a peça');
        break;
};