import validator from './validator.js';

//console.log(validator.isValid(pagar));

window.addEventListener('load', init, false);
function init() {
    let welcome = document.querySelector('.welcome');
    welcome.style.visibility = 'visible';
    let app = document.querySelector('.app');
    app.style.visibility = 'hidden';
    let boton = document.querySelector('.enter');
    boton.addEventListener('click', function (e) {
        if (app.style.visibility === 'hidden') {
            app.style.visibility = 'visible';
            welcome.style.visibility = 'hidden';
        }
    }, false);
   
}

document
    .getElementById("enter")
    .addEventListener("click", function (event) {
        event.preventDefault();

        document.getElementById("saludo").innerText = " ¡Hola " + document.getElementById("enterName").value + "!  estas a un paso de tener tu acceso ilimitado";

    })

/*let input = document.getElementById('cardNumber')
input.addEventListener('keypress', (e) => {
    e.preventDefault()
    let codigoKey = e.keyCode
    let valorkey = String.fromCharCode(codigoKey)
    let valor = parseInt(valorkey)
    if (valor) {
        input.value += valor
    }
})*/

document
    .getElementById("pagar")
    .addEventListener("click", function (event) {
        event.preventDefault();
        
         let pagar =  document.getElementById("cardNumber").value ;
         validator.isValid(pagar);
        validator.maskify(pagar)
        
    })