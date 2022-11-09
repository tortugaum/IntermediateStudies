//Closure: uma função "lembra" do seu escopo léxico(escopo onde a fução foi definida)
//mesmo quando a função é executada fora dele
//a closure é muito usada para previnir dados de vazarem pra onde não devem: Exemplo 1
//Closure também é utilizada para fazer factories vide Exemplo 2
//A closure grava a usa a variável baseada no momento que foi chamada Exemplo 3

const closureFunction = require('./closure1');

let x = 100;
console.log(closureFunction);

//Exemplo 1
//a senha não é vazada para fora do escopo
//Quando a função Outer() é chamada
//A chamada não tem acesso a senha
function outer() {
  let senha = '12345';

  function inner() {
    if (senha === '12345') return true;
    else return false;
  }

  return inner();
}

console.log(outer());

//Exemplo 2
//Utilizar o encapsulamento do closure para fazer uma função com funcionalidades diferentes
function funLog(message) {
  return () => {
    console.log(`🐇 ${message}`);
  };
}

const funConsoleLog = funLog('poin poin poin');

funConsoleLog();

//Exemplo 3
//No primeiro for, o log é chamado apenas após o timeout
//Nesse momento o for já acabou e o i = 3
//Var é declarado fora do escopo da função
//Como se fosse:
//var i;
//for(i=0;i<3;i++){}
//Portanto vai logar 3,3,3
for (var i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };

  setTimeout(log, 100);
}
//No segundo for, por se tratar de uma variável let
//O valor de i seguirá normalmente
for (let i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };

  setTimeout(log, 100);
}
