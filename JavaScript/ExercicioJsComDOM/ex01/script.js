function Calcular() {
  let campo1 = Number(document.getElementById("campo1").value);
  let campo2 = Number(document.getElementById("campo2").value);
  let operador = document.getElementById("operador").value;
  let resultado = document.getElementById("resultado");

  if (operador == "+") {
    console.log( campo1 + campo2);
  
} else if (operador == "-") {
    console.log( campo1 - campo2);
  
} else if (operador == "*") {
    console.log( campo1 * campo2);
  
} else if (operador == "/") {
    console.log(campo1 / campo2);
  }
};
