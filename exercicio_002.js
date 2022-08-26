'use strict';
// Usando javascript esconda o botão e mostre o quadrado escondido na tela, 
// e 3 segundos após o clique, aplique no quadrado a classe blue do css.

const button = document.querySelector("button");
button.addEventListener("click", clickButton);

function clickButton() {
  handleButton();
  handleSquare();
}

function handleButton() {
  button.style.display = 'none';
}

function handleSquare() {
  const square = document.querySelector("div");
  square.classList.remove("hidden");

  setTimeout(() => {
    square.classList.add("blue");
  }, 3 * 1000);
}
