// Utilize if/else para escrever um código que defina três números em constantes e retorne true 
// se pelo menos uma das três for par. Caso contrário, ele deve retornar false.

const a = 5;
const b = 25;
const c = 15;

let isEven = false;
if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
    isEven = true;
} console.log(isEven);
