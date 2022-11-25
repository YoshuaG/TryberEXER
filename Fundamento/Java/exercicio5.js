// tilize if/else para escrever um código que 
// defina três constantes com os valores dos três ângulos internos
//  de um triângulo
// Retorne true se os ângulos representarem os ângulos de um triângulo
// e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

const degreeAngleA = 65;
const degreeAngleB = 100;
const degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if (allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}