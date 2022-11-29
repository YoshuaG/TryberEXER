//  Utilize if/else para escrever um código que retorne o maior 
//  de três números. Defina, no começo do seu código,
//  três constantes com os valores que serão comparados.

const a = 11;
const b = 22;
const c = 33;

if (a > b && a > c) {
    console.log('o maior é:' + a + '(a)');
} else if (b > a && b > c) {
    console.log('o maior é:' + b + '(b)');
} else {
    console.log('o maior é: ' + c + ' (c)');
}