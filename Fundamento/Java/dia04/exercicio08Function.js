// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

function repetidos(number) {
    let contagem1 = 0;
    let contagem2 = 0;
    let contagem3 = 0;
    for (let index in number) {
        let verificar = number[index];
        for (let index2 in number) {
            if (verificar === number[index2]) { contagem2 += 1; }
        }
        if (verificar > contagem1) {
            contagem1 = contagem2;
        }
        contagem2 = 0;
    }
    return number[contagem3];
}
console.log(repetidos([2, 3, 2, 5, 8, 2, 3]));