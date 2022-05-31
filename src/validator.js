const validator = {
  isValid: function (cardNumber) {
    let arr = cardNumber.split('');
    let invertido = arr.reverse();
    let multiplicado = 0;
    let sumaPar = 0;
    let sumaImpar = 0;
    let total = 0;
    const arrFiltrado = invertido.filter((num, index) => index % 2 != 0)
    for (let i = 0; i < arrFiltrado.length; i++) {
      multiplicado = arrFiltrado[i] * 2
      sumaPar += multiplicado >= 10 ? (multiplicado % 10) + 1 : multiplicado; //operadores ternarios
    }
    const arrFiltradoI = invertido.filter((num, index) => index % 2 == 0)
    for (let i = 0; i < arrFiltrado.length; i++) {
      let impar = parseInt(arrFiltradoI[i])
      sumaImpar += impar
    }
    total = (sumaPar + sumaImpar) % 10
    if (total == 0) {
      alert("CANCELADO")
      
    }
    else alert("TARJETA INVALIDA")
    // eslint-disable-next-line no-unused-vars
    console.log(invertido)
    console.log(arrFiltrado)
    console.log(sumaPar)
    console.log(arrFiltradoI)
    console.log(sumaImpar)
    console.log(total)
  },

  maskify: function (creditCardNumber) {
    console.log(creditCardNumber.split('').map((letra,i)=>i<creditCardNumber.length-4?'#':letra).join(''))
    
    
  }
  /*for (let i = 0; i < arr.length; i++){
    console.log(creditCardNumber.replaceAll(arr[i], rep_string));
  }*/
  // eslint-disable-next-line no-undef

};

export default validator;
