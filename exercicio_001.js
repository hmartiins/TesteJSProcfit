'use strict';
// Corrija o código abaixo para exibir o valor 35 no console sem mexer 
// no valor das variáveis numero1 e numero2.
function soma(operacao) {
  const numero1 = 7;
  const numero2 = 5;

  return operacao(numero1, numero2);
}

console.log(
  soma(function (numero1, numero2) {
    return numero1 * numero2;
  })
);
