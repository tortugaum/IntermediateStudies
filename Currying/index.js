//Currying
//Funções dentro de funções sendo chamadas juntas
const soma = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};

console.log(soma(1)(1)(1));
console.log(soma(3)(4)(5));

//Exemplo 1
//A função recebe o desconto, tem uma função que recebe preço, e no final multiplica-os
//na linha 24 é possível ver a chamada passando os argumentos juntos
const getDiscount = (discount) => (price) => price * discount;

const getTenPercent = getDiscount(0.1);
const getTwentyPercent = getDiscount(0.2);

console.log(getTenPercent(100), getTwentyPercent(100));

console.log(getDiscount(0.5)(200));
