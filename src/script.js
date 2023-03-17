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


  var array = numTarjeta.split("");
  var arrayReversed = array.reverse();
  var suma = 0;

  for (var i = 0; i < arrayReversed.length; i++) {
    if (i % 2 == 1) {
      var mult = parseInt(arrayReversed[i]) * 2;
      if (mult > 9) {
        var multString = mult.toString();
        var digitos = parseInt(multString.charAt(0)) + parseInt(multString.charAt(1));
        suma = suma + digitos;
      } else {
        suma = suma + mult;
      }
    } else {
      suma = suma + parseInt(arrayReversed[i]);
    }
  }
  console.log(suma);

  if (suma % 10 === 0) {
    alert("Transacción exitosa");
  } else {
    alert("Tarjeta inválida");
  }
}
 
function rellenar(element) {
  if (element.value.length >  element.maxLength) 
    element.value = element.value.slice(0, element.maxLength);
  
  if(element.value.length == element.maxLength){
    var lastDigits = element.value.slice(12, element.maxLength);
    var hiddenNumber = "#### #### #### " + lastDigits;
    var numero = document.getElementById("numero");
    numero.innerHTML = hiddenNumber;
  }
}

