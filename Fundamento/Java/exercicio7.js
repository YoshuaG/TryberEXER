// Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.


const grade = 85;
if (grade < 0 || grade > 100) {
    console.log('errado, nota incorreta');
} else if (grade >= 90) {
    console.log('a');
} else if (grade >= 80) {
    console.log('b');
} else if (grade >= 70) {
    console.log('c');
} else if (grade >= 60) {
    console.log('d');
}else if (grade >= 50) {
    console.log('e');
}else {
    console.log('f');
}

