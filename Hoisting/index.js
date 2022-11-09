//HOISTING
//Mecanismo onde declarações de variáveis e funções
//São movidas para o topo do escopo antes da execução do código

console.log(Hoist);
var Hoist = 'The variable Has been hoisted';
//output : undefined//

//o javascript faz o hoist em declaração do var
//portanto para o compilador, o que ocorreu foi o seguinte:
var Hoist;
console.log(Hoist);
Hoist = 'The variable Has been hoisted';

//Funcções também sofrem o efeito de hoisting
//o Javascript quando roda, cria a função no topo de tudo
console.log(mostrarTexto('ola'));

function mostrarTexto(message) {
  return message;
}
