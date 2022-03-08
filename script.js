function media(n1, n2) {
  return (n1 + n2) / 2;
}

function extrairValor (numero) {
  return parseInt(numero.value);
}

function resultado() {
  let title = document.querySelector("#title");
  let resultado = document.querySelector("#resultado");
  let btn_calcular = document.querySelector("#btn_calcular");
  let num1 = document.querySelector("#n1");
  let num2 = document.querySelector("#n2");

  let mediaResultado = media(extrairValor(num1), extrairValor(num2));
  resultado.textContent = mediaResultado;
  title.textContent = "RESULTADO";
  btn_calcular.value = "NOVO CÁLCULO";
}


