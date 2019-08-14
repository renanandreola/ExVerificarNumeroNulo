//2) Crie uma função que receba um valor e diga se é nulo ou não.

var value = parseInt(prompt("Digite um valor: "));

function check (value) {
  if(isNaN(value)) {
    return document.body.append("É nulo")
  }else {
    return document.body.append("Não é nulo")
  }}
check(value);
