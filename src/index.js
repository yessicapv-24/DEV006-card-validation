import validator from "./validator.js";

let enviar = document.querySelector('#enviar');
enviar.addEventListener('click', function () {
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
});

let numTarjeta = document.querySelector('#numTarjeta');
numTarjeta.addEventListener('input', function () {
  if (numTarjeta.value.length >  numTarjeta.maxLength) 
  numTarjeta.value = numTarjeta.value.slice(0, numTarjeta.maxLength);
  let numero = document.querySelector('#numero');
  numero.innerHTML = validator.maskify(numTarjeta.value);
});

let propietario = document.querySelector('#propietario');
propietario.addEventListener('input', function () {
  let nombre = document.querySelector('#nombreTarjeta');
  nombre.innerHTML = propietario.value;
});
