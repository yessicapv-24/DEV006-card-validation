const validator = {
  isValid(creditCardNumber){
    var array = creditCardNumber.split("");
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
  
    if (suma % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },
  maskify(creditCardNumber){
    if(creditCardNumber.length < 5)
      return creditCardNumber;
    else {
      var lastDigits = creditCardNumber.slice(creditCardNumber.length - 4, creditCardNumber.length);
      var masked = "";
      for(var i = 0; i < creditCardNumber.length - 4 ; i++){
        masked = masked + "#";
      }
      return masked + lastDigits;
    }
  }
};

export default validator;

