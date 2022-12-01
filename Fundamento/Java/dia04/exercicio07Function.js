
// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda

  function maiornomedetodos(nomes) {
    let maiornome = nomes[0];
    for (let index in nomes) {
        if (maiornome.length < nomes[index].length) {
            maiornome = nomes[index];
        }
    }
    return maiornome;
}
console.log(maiornomedetodos(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));