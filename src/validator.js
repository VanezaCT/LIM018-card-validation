const validator = {
  isValid: function (cardNumber) {
    let arr = cardNumber.split('');
    let invertido = arr.reverse();
    let multiplicado = 0;
    let sumaPar = 0;
    let sumaImpar = 0;
    let total = 0;
    const arrPar= invertido.filter((num, index) => index % 2 != 0)
  
    for (let i = 0; i < arrPar.length; i++) {
      multiplicado = arrPar[i] * 2
      sumaPar += multiplicado >= 10 ? (multiplicado % 10) + 1 : multiplicado; //operadores ternarios
    }
    const arrImpar = invertido.filter((num, index) => index % 2 == 0)
    for (let i = 0; i < arrImpar.length; i++) {
      let impar = parseInt(arrImpar[i])
      sumaImpar += impar
    }
    total = (sumaPar + sumaImpar) % 10
    if (total == 0) {
      return true;
     
      
    }
    else
    return false;
    // eslint-disable-next-line no-unused-vars
  
  },

  maskify: function (creditCardNumber) {
    return creditCardNumber.split('').map((letra, i) => i < creditCardNumber.length - 4 ? '#' : letra).join('')
  }


};

export default validator;
