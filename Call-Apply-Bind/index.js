//BIND
//bind é usado para dar o contato para a função
const cat = {
  name: 'Lia',
  speak(sound) {
    return `${this.name} says "${sound}"`;
  },
};

console.log(cat.speak('Meow'));

//o contexto para this.name agora é cat
const catSpeak = cat.speak.bind(cat);
//O contexto contem um name, portanto é válido
const catSpeak1 = cat.speak.bind({ name: 'Luiz' });
//É possível atribuir um contexto e um valor para a função
const catSpeak2 = cat.speak.bind(cat, 'Miaaaau');

console.log(catSpeak('Meow'));
console.log(catSpeak1('Meow'));
console.log(catSpeak2());

//CALL
//Chama a função imediatamente passando context oe argumento
cat.name = 'Buggy';
const catSpeakCall = cat.speak;

console.log(catSpeak.call(cat, 'Meow'));

//APPLY
//Chama afunção imediatamento passando context e um array de argumentos
cat.name = 'Tequila';
const catSpeakApply = cat.speak;

const test = (...args) => {
  console.log(catSpeakApply.apply(cat, args));
};

test('Meowo', 'Miaaau', 'Mingaaau');
