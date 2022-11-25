// Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: 
// o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) 
//  empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto;
// lucro = valorVenda - valorCustoTotal (lucro de um produto);

const custoproduto = 10;
const valorvenda = 20;
if (custoproduto >= 0 && valorvenda >= 0){
    const custototal = custoproduto * 1.2;
    const lucrototal = (valorvenda - custototal) * 1000;
    console.log(lucrototal);
} else{
    console.log('errado, o lucro n pode ser negativo')
};