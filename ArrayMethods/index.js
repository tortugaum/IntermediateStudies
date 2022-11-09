//MAP
//retorna um array que cada elemento está transformado
//conforme especificado na função

const arr = [1, 2, 3, 4, 5, 6];
const mapped = arr.map((a) => a * 2);
console.log(arr);
console.log(mapped);

//FILTER
//Retorna o array dos elementos que batem com a condição da função
const filterArr = [1, 2, 3, 4, 5, 6];
const filtered = filterArr.filter((x) => x % 2 === 0);

console.log(filterArr);
console.log(filtered);

//REDUCE
//Agrega os elementos como especificado na função
const reduceArr = [1, 1, 1, 1, 1]; //5 numeros 1
const reduced = reduceArr.reduce((total, current) => total + current);

console.log(reduceArr);
console.log(reduced);

//Exemplo 1
//Um array de objetos com paises e qtd de lançamentos de foguete
const rockets = [
  {
    country: 'Brazil',
    launches: 5,
  },
  {
    country: 'USA',
    launches: 20,
  },
  {
    country: 'Russia',
    launches: 15,
  },
  {
    country: 'Germany',
    launches: 12,
  },
];
//nesse caso prevVal é o valor anterior, elm é o elemento atual do array
//na função temos a soma do elemento atual e o prevVal e em seguida um segundo parametro, o valor inicial = 0
const totalLaunches = rockets.reduce(
  (prevVal, elm) => prevVal + elm.launches,
  0
);
console.log(totalLaunches);

//FIND
//Retorna o primeiro do elemento do array que bate com a condição na função
const findArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const found = findArr.find((x) => x > 5);

console.log(findArr);
console.log(found);

//FINDINDEX
// Retorna o index do primeiro elemento do array que bate com a condição da função
const findIndexArr = ['Nick', 'Frank', 'Joe', 'Frank'];
const foundIndex = findIndexArr.findIndex((x) => x === 'Frank');

console.log(findIndexArr);
console.log(foundIndex);

//INDEXOF
//Retorna o index do primeiro elemento do array que tem o valor do argumento passado
const indexOfArr = ['Nick', 'Frank', 'Joe', 'Frank'];
const foundIndexOf = indexOfArr.indexOf('Frank');

console.log(indexOfArr);
console.log(foundIndexOf);
