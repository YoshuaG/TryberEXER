// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.


function menorindice(number) {
    let menorindice = 0;
    for(let index in number){
        if(number[menorindice]> number[index]){
            menorindice = index;
        }
    }
    return menorindice;
}
console.log(menorindice([2, 4, 6, 7, 10, 0, -3]));