let x = 50;

function outsideSomarMais3() {
  let x = 200;
  function somarMais3() {
    return x + 3;
  }

  return somarMais3();
}

module.exports = outsideSomarMais3();
