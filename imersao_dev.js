var valorEmDolar = prompt(
    " Qual seria o valor que você gostaria de verificar em real? "
  ); // podemos sempre alterar o valor.
  var cotacaoDoDolar = 4.86;
  var nomeUsuario = prompt("Para uma melhor experiência me informe seu nome:");
  var valorEmReal = valorEmDolar * cotacaoDoDolar;
  valorEmReal = valorEmReal.toFixed(2); // mostra o decimal no alert. (no lugar do 2 colocamos quantas casas decimais desejamos que apareça.)
  alert(
    nomeUsuario +
      ", " +
      "conforme informado " +
      "o valor em real seria: " +
      "R$ " +
      valorEmReal +
      ", no dia de hoje."
  );