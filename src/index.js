import validator from "./validator";

function validar() {
  var numTarjeta = document.getElementById("numTarjeta").value;
  if (numTarjeta.length ===0) {
    alert("Escriba su número de tarjeta");
    return;
  }
  var numTarjeta = document.getElementById("numTarjeta").value;
  if (numTarjeta.length < 16) {
    alert("longitud inválida");
    return;
  }

  var propietario = document.getElementById("propietario").value;
  if (propietario === "") {
    alert("Escriba su nombre");
  }
  var inputCCV = document.getElementById("inputCCV").value;
  if (inputCCV === "") {
    alert("Código ccv inválido");
  }
  var inputCCV = document.getElementById("inputCCV").value;
  if (inputCCV.length < 3) {
    alert("longitud CCV inválida");
    return;
  }

  var numTarjetaValid = validator.isValid(numTarjeta);

  if (numTarjetaValid === true) {
    alert("Transacción exitosa");
  } else {
    alert("Tarjeta inválida");
  }
}
 
function rellenar(element) {
  if (element.value.length >  element.maxLength) 
    element.value = element.value.slice(0, element.maxLength);

  numero.innerHTML = validator.maskify(element.value);
}