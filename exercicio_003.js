'use strict';
// 1) Corrija o(s) erro(s) que encontrar no html e javascript para fazer o programa funcionar

// 2) Faça o método mostraAlerta da classe Alerta disparar um erro ao receber um 
// valor diferente de string
// ... Sugestão de mensagem para o erro: "valor inválido!"
class Alerta {

  constructor() {}

  static mostraAlerta(mensagem) {
    if (typeof mensagem !== 'string') {
      throw new Error(
        `Valor ${mensagem} recebido em mostraAlerta não é uma string. Valor Inválido!`
      );
    }

    alert(mensagem);
  }
  
}

const criaMensagem = function(seletor, valorAlternativo) {
  const tag = document.querySelector(seletor);
  let texto = tag.innerHTML;

  if(valorAlternativo !== undefined) {
    return valorAlternativo;
  }

  return (texto.match(/[0-9]/) !== null) ? +texto : texto;
}

try {
  let minhaMensagem1 = criaMensagem('body > h1');
  let minhaMensagem2 = criaMensagem('body > h2', true);
  let minhaMensagem3 = criaMensagem('body > h3');

  Alerta.mostraAlerta(minhaMensagem1);
  Alerta.mostraAlerta(minhaMensagem2);
  Alerta.mostraAlerta(minhaMensagem3);

} catch(error) {
  console.error(error);
}

