// Crie uma função que receba uma string word e outra string ending. 
// Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false


function recebe(inicio, fim){
    inicio = inicio.split('');
    fim = fim.split('');
    let real = true;
    for(let index = 0; index < fim.length; index += 1){
        if(inicio[inicio.length - fim.length + index] != fim[index]){
            real = false;
        }
    }
    return real;
}
console.log(recebe('trybe', 'be'));
console.log(recebe('joaofernando', 'fernan'));
console.log(recebe('yoshua', 'shu'));
