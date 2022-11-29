// Considere o array de strings abaixo:
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// Utilize a estrutura de repetição for para escrever dois algoritmos: 
// um que imprima no console a maior palavra desse array e outro que imprima a menor. 
// Considere o número de caracteres de cada palavra.


let palavra = 'trybe';
let reverso = '';
for (let index = 0; index < palavra.length; index += 1){
    reverso += palavra[palavra.length - 1 - index];
}
console.log(reverso + ' <<< Leia no espelho');