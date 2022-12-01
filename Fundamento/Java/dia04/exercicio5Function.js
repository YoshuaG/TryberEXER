// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

function maiorindice(number){
    let maiorindice = 0;
    for (let index in number){
        if (number[maiorindice] < number[index]){
            maiorindice = index
        }
    }
    return maiorindice;
}
console.log(maiorindice([2, 3, 6, 7, 10, 1]));